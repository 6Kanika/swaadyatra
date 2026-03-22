import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | SwaadYatra",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFBF0]">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-md">
          <div className="text-8xl font-extrabold text-[#E23744] mb-2">404</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-3">Page Not Found</h1>
          <p className="text-gray-500 text-base mb-8 leading-relaxed">
            Looks like this page took a wrong turn. The food spot you&apos;re looking for may have moved or doesn&apos;t exist.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="bg-[#E23744] hover:bg-[#c72d38] text-white font-semibold px-6 py-3 rounded-full transition-colors"
            >
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="border border-gray-300 hover:border-[#E23744] text-gray-700 hover:text-[#E23744] font-semibold px-6 py-3 rounded-full transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
