/**
 * Generates icon-192.png, icon-512.png, apple-touch-icon.png
 * Pure Node.js — no external dependencies.
 * Design: #E23744 red rounded-square background, white "S" centered.
 */
import { writeFileSync } from "fs";
import { deflateSync } from "zlib";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, "../public");

function crc32(buf) {
  let c = 0xffffffff;
  for (const b of buf) {
    c ^= b;
    for (let k = 0; k < 8; k++) c = c & 1 ? (c >>> 1) ^ 0xedb88320 : c >>> 1;
  }
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const t = Buffer.from(type, "ascii");
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const crcVal = Buffer.alloc(4);
  crcVal.writeUInt32BE(crc32(Buffer.concat([t, data])));
  return Buffer.concat([len, t, data, crcVal]);
}

function encodePNG(pixels, size) {
  const rows = [];
  for (let y = 0; y < size; y++) {
    const row = Buffer.alloc(1 + size * 4);
    row[0] = 0;
    for (let x = 0; x < size; x++) {
      const i = (y * size + x) * 4;
      row[1 + x * 4 + 0] = pixels[i];
      row[1 + x * 4 + 1] = pixels[i + 1];
      row[1 + x * 4 + 2] = pixels[i + 2];
      row[1 + x * 4 + 3] = pixels[i + 3];
    }
    rows.push(row);
  }
  const raw = deflateSync(Buffer.concat(rows), { level: 9 });
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; ihdr[9] = 6;
  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk("IHDR", ihdr),
    chunk("IDAT", raw),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

function renderIcon(size) {
  const pixels = new Uint8Array(size * size * 4);
  const cx = size / 2;
  const cy = size / 2;
  const cornerR = size * 0.18;
  const half = size / 2;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const idx = (y * size + x) * 4;

      // Rounded rect SDF
      const qx = Math.abs(x - cx) - (half - cornerR);
      const qy = Math.abs(y - cy) - (half - cornerR);
      const dist = Math.sqrt(Math.max(qx, 0) ** 2 + Math.max(qy, 0) ** 2) - cornerR;

      if (dist > 0.5) {
        pixels[idx + 3] = 0;
        continue;
      }

      const alpha = Math.round(Math.min(1, Math.max(0, 0.5 - dist)) * 255);

      // Normalize to [-1,1] for letter drawing
      const nx = (x - cx) / (size * 0.3);
      const ny = (y - cy) / (size * 0.3);

      const inS = drawS(nx, ny);

      pixels[idx]     = inS ? 255 : 0xe2;
      pixels[idx + 1] = inS ? 255 : 0x37;
      pixels[idx + 2] = inS ? 255 : 0x44;
      pixels[idx + 3] = alpha;
    }
  }
  return pixels;
}

function drawS(nx, ny) {
  const stroke = 0.22;

  // Top arc: upper bump of S going right
  const t = Math.sqrt((nx - 0.08) ** 2 + (ny + 0.42) ** 2);
  const inTop = Math.abs(t - 0.48) < stroke && ny < -0.05 && nx > -0.5;

  // Bottom arc: lower bump of S going left
  const b = Math.sqrt((nx + 0.08) ** 2 + (ny - 0.42) ** 2);
  const inBot = Math.abs(b - 0.48) < stroke && ny > 0.05 && nx < 0.5;

  // Middle crossbar
  const inMid = Math.abs(ny) < stroke * 0.85 && Math.abs(nx) < 0.42;

  return inTop || inBot || inMid;
}

function writeIcon(filename, size) {
  const pixels = renderIcon(size);
  const png = encodePNG(pixels, size);
  writeFileSync(resolve(OUT, filename), png);
  console.log(`✓ ${filename} (${size}x${size})`);
}

writeIcon("icon-192.png", 192);
writeIcon("icon-512.png", 512);
writeIcon("apple-touch-icon.png", 180);
console.log("Done.");
