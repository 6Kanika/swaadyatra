"use client";

export default function AboutHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #E23744 0%, #c72d38 50%, #a8232d 100%)" }}
    >
      {/* top-left soft highlight */}
      <div
        className="absolute top-0 left-0 w-[420px] h-[260px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 20%, rgba(255,255,255,0.15) 0%, transparent 70%)",
        }}
      />

      {/* bottom-right yellow accent glow */}
      <div
        className="absolute bottom-10 right-10 w-48 h-48 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,193,7,0.18) 0%, transparent 70%)",
          filter: "blur(24px)",
        }}
      />

      {/* ── CONTENT floats, not the section ── */}
      <div className="content-float relative z-10 container mx-auto px-6 pt-10 pb-20 md:pt-12 md:pb-24 text-center">

        <span
          className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase"
          style={{
            background: "rgba(255,255,255,0.15)",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.30)",
            backdropFilter: "blur(8px)",
          }}
        >
          🍛 India&apos;s Food Travel Guide
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5 max-w-3xl mx-auto drop-shadow-sm">
          Discover India&apos;s Cities Through Their Most Loved{" "}
          <span style={{ color: "#FFC107" }}>Flavours</span>
        </h1>

        <p className="text-lg md:text-xl text-white/85 max-w-xl mx-auto leading-relaxed">
          SwaadYatra helps travelers explore the most famous food spots of every city
          while discovering nearby tourist attractions — all in one place.
        </p>
      </div>

      {/* ── SVG WAVE BOTTOM — no gap, flush with section ── */}
      <div className="absolute bottom-0 left-0 w-full leading-none" style={{ lineHeight: 0 }}>
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "80px", display: "block" }}
        >
          <path
            className="wave-path"
            d="M0,48 C180,0 360,80 540,48 C720,0 900,80 1080,48 C1260,0 1440,80 1440,48 L1440,80 L0,80 Z"
            fill="rgba(255,255,255,0.20)"
          />
          <path
            className="wave-path"
            d="M0,32 C180,80 360,-16 540,32 C720,80 900,-16 1080,32 C1260,80 1440,-16 1440,32 L1440,80 L0,80 Z"
            fill="#ffffff"
            style={{ animationDelay: "0.6s" }}
          />
        </svg>
      </div>
    </section>
  );
}
