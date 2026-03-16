"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Search, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import type { CityMeta } from "@/lib/cityIndex";

export default function CitySearch({ cities }: { cities: CityMeta[] }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [highlighted, setHighlighted] = useState(0);
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = query.trim().length === 0 ? [] : cities.filter((c) =>
    c.name.toLowerCase().startsWith(query.trim().toLowerCase())
  );

  const navigate = useCallback((slug: string) => {
    setQuery("");
    setOpen(false);
    router.push(`/city/${slug}`);
  }, [router]);

  // Close on outside click
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!open || filtered.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlighted((h) => (h + 1) % filtered.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlighted((h) => (h - 1 + filtered.length) % filtered.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      navigate(filtered[highlighted].slug);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
    setHighlighted(0);
    setOpen(true);
  }

  return (
    <div ref={wrapperRef} className="relative w-full">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={() => query.trim() && setOpen(true)}
        placeholder="Search cities to explore street food…"
        autoComplete="off"
        className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#E23744] focus:border-transparent"
      />

      {open && filtered.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50">
          <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest px-4 pt-3 pb-1">
            City Pages
          </p>
          <ul>
            {filtered.map((city, i) => (
              <li key={city.slug}>
                <button
                  onMouseDown={() => navigate(city.slug)}
                  onMouseEnter={() => setHighlighted(i)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                    i === highlighted ? "bg-[#E23744]/10 text-[#E23744]" : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <span className={`p-1.5 rounded-full ${i === highlighted ? "bg-[#E23744]/10" : "bg-gray-100"}`}>
                    <MapPin className={`w-3.5 h-3.5 ${i === highlighted ? "text-[#E23744]" : "text-gray-400"}`} />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="font-semibold text-sm block truncate">{city.name}</span>
                    <span className="text-xs text-gray-400">{city.count} Food Spots</span>
                  </span>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    i === highlighted ? "bg-[#E23744] text-white" : "bg-gray-100 text-gray-500"
                  }`}>
                    Explore
                  </span>
                </button>
              </li>
            ))}
          </ul>
          <div className="px-4 py-2 border-t border-gray-50">
            <p className="text-[11px] text-gray-400">Press ↑↓ to navigate · Enter to go · Esc to close</p>
          </div>
        </div>
      )}

      {open && query.trim().length > 0 && filtered.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-2xl shadow-2xl border border-gray-100 px-4 py-5 z-50 text-center">
          <p className="text-sm text-gray-500">No cities found for <span className="font-semibold text-gray-700">&quot;{query}&quot;</span></p>
          <p className="text-xs text-gray-400 mt-1">Try Delhi, Jaipur, or Amritsar</p>
        </div>
      )}
    </div>
  );
}
