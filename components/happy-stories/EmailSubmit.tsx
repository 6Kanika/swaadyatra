"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function EmailSubmit() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    console.log("Story submission email:", email);
    setSubmitted(true);
    setEmail("");
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#E23744] to-[#FF9F1C]">
      <div className="max-w-xl mx-auto text-center">
        <span className="inline-block bg-white/20 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
          Share Your Story
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Have an amazing food travel experience?
        </h2>
        <p className="text-white/85 mb-8 text-lg">
          Share it with us! We'll reach out if we'd like to feature your story.
        </p>

        {submitted ? (
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-6 text-white font-semibold text-lg">
            🎉 Thanks! We'll be in touch soon.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-5 py-3.5 rounded-full bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/60 shadow-md"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 shadow-md whitespace-nowrap"
            >
              <Send className="w-4 h-4" />
              Submit Your Story
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
