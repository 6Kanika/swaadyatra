"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VendorSection from "@/components/VendorSection";
import {
  MessageCircle,
  ChevronDown,
  Send,
} from "lucide-react";



const faqs = [
  {
    q: "How can I suggest a food spot?",
    a: "Fill out the contact form with the subject 'Food Spot Suggestion' and share the name, city, and a brief description. Our team reviews every suggestion.",
  },
  {
    q: "How can restaurants get listed on SwaadYatra?",
    a: "Use the 'Apply For Listing' button or write to business@swaadyatra.com. We verify each listing to ensure quality and authenticity for our travellers.",
  },
  {
    q: "Is SwaadYatra free for travelers?",
    a: "Yes! SwaadYatra is completely free for travelers. Discover famous food spots, get directions, and explore food travel in India at no cost.",
  },
  {
    q: "How do you select food spots?",
    a: "Our team researches local recommendations, traveller reviews, and cultural significance. We prioritise authentic, locally loved spots over tourist traps.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-900 text-lg pr-4">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#E23744] flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-6 pb-5 text-gray-500 text-base leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

type FormState = { name: string; email: string; city: string; subject: string; message: string };
type Status = "idle" | "loading" | "success" | "error";

function ContactForm({ formRef }: { formRef: React.RefObject<HTMLDivElement | null> }) {
  const [form, setForm] = useState<FormState>({ name: "", email: "", city: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [apiMessage, setApiMessage] = useState("");

  const validate = (): Partial<FormState> => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Full name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.city.trim()) e.city = "City is required.";
    if (!form.subject.trim()) e.subject = "Subject is required.";
    if (!form.message.trim()) e.message = "Message cannot be empty.";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: `City: ${form.city}\n\n${form.message}`,
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setApiMessage(data.message);
        setForm({ name: "", email: "", city: "", subject: "", message: "" });
        setErrors({});
      } else {
        setStatus("error");
        setApiMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setApiMessage("Something went wrong. Please try again.");
    }
  };

  const field = (id: keyof FormState, label: string, type = "text", placeholder = "") => (
    <div>
      <label htmlFor={id} className="block text-base font-semibold text-gray-700 mb-2">{label}</label>
      <input
        id={id} type={type} value={form[id]} placeholder={placeholder}
        onChange={(e) => { setForm(f => ({ ...f, [id]: e.target.value })); setErrors(er => ({ ...er, [id]: undefined })); }}
        className={`w-full px-4 py-3 rounded-xl border text-base focus:outline-none focus:ring-2 focus:ring-[#E23744] focus:border-transparent transition-all ${
          errors[id] ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50"
        }`}
      />
      {errors[id] && <p className="text-red-500 text-sm mt-1">{errors[id]}</p>}
    </div>
  );

  return (
    <div ref={formRef} className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-10">
      {status === "success" ? (
        <div className="text-center py-10">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Send className="w-7 h-7 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
          <p className="text-gray-500 text-base">{apiMessage}</p>
          <button onClick={() => setStatus("idle")} className="mt-5 text-[#E23744] font-semibold hover:underline text-base">
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {status === "error" && (
            <div className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
              <span className="mt-0.5">⚠️</span>
              <span>{apiMessage}</span>
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {field("name", "Full Name", "text", "Your full name")}
            {field("email", "Email Address", "email", "you@example.com")}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {field("city", "City", "text", "e.g. Delhi, Varanasi")}
            {field("subject", "Subject", "text", "What is this about?")}
          </div>
          <div>
            <label htmlFor="message" className="block text-base font-semibold text-gray-700 mb-2">Message</label>
            <textarea
              id="message" rows={4} value={form.message} placeholder="Tell us more..."
              onChange={(e) => { setForm(f => ({ ...f, message: e.target.value })); setErrors(er => ({ ...er, message: undefined })); }}
              className={`w-full px-4 py-3 rounded-xl border text-base focus:outline-none focus:ring-2 focus:ring-[#E23744] focus:border-transparent transition-all resize-none ${
                errors.message ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50"
              }`}
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-[#E23744] hover:bg-[#c72d38] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 text-base"
          >
            {status === "loading" ? (
              <><span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />Sending...</>
            ) : (
              <><Send className="w-5 h-5" />Send Message</>
            )}
          </button>
        </form>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ── 1. HERO — light warm bg + floating animated blobs ── */}
      <section className="relative overflow-hidden py-16 md:py-22" style={{ background: "linear-gradient(145deg, #fff5f5 0%, #fff0f0 40%, #fde8e8 100%)" }}>

        {/* animated floating blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* large blob top-right */}
          <div
            className="absolute -top-16 -right-16 w-80 h-80 rounded-full opacity-30"
            style={{
              background: "radial-gradient(circle, #E23744 0%, transparent 70%)",
              animation: "floatA 7s ease-in-out infinite",
            }}
          />
          {/* medium blob bottom-left */}
          <div
            className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, #E23744 0%, transparent 70%)",
              animation: "floatB 9s ease-in-out infinite",
            }}
          />
          {/* small accent blob center-right */}
          <div
            className="absolute top-1/2 right-[15%] w-28 h-28 rounded-full opacity-25"
            style={{
              background: "radial-gradient(circle, #FFC107 0%, transparent 70%)",
              animation: "floatC 6s ease-in-out infinite",
            }}
          />
          {/* tiny dot top-left */}
          <div
            className="absolute top-[20%] left-[10%] w-14 h-14 rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, #E23744 0%, transparent 70%)",
              animation: "floatB 8s ease-in-out infinite 1s",
            }}
          />
        </div>

        {/* keyframes injected inline */}
        <style>{`
          @keyframes floatA {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            33%       { transform: translate(-20px, 18px) scale(1.05); }
            66%       { transform: translate(14px, -12px) scale(0.97); }
          }
          @keyframes floatB {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            40%       { transform: translate(18px, -16px) scale(1.08); }
            70%       { transform: translate(-10px, 10px) scale(0.95); }
          }
          @keyframes floatC {
            0%, 100% { transform: translate(0px, 0px); }
            50%       { transform: translate(-12px, 20px); }
          }
        `}</style>

        <div className="relative z-10 container mx-auto px-6 text-center max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-[#E23744]/10 border border-[#E23744]/20 rounded-full px-5 py-2 mb-6">
            <MessageCircle className="w-4 h-4 text-[#E23744]" />
            <span className="text-[#E23744] text-sm font-bold tracking-wide uppercase">Contact Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
            Get In Touch With{" "}
            <span className="text-[#E23744]">SwaadYatra</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Have a question, want to suggest a famous food spot, or want to list your food shop?
            We would love to hear from you.
          </p>
        </div>

        {/* skewed bottom edge into white */}
        <div
          className="absolute bottom-0 left-0 w-full h-14 bg-white pointer-events-none"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
        />
      </section>



      {/* ── 3. VENDOR LISTING FORM ── */}
      <VendorSection />

      {/* ── 5. FAQ ── */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                Frequently Asked <span className="text-[#E23744]">Questions</span>
              </h2>
              <p className="text-gray-500 text-lg">Quick answers about our food travel platform.</p>
            </div>
            <div className="space-y-3">
              {faqs.map((faq) => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
