"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFFBF0] px-4">
      <div className="text-center max-w-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">City page unavailable</h2>
        <p className="text-gray-500 text-sm mb-6">We couldn&apos;t load this city. Try again or go back home.</p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={reset}
            className="bg-[#E23744] hover:bg-[#c72d38] text-white font-semibold px-5 py-2.5 rounded-full transition-colors text-sm"
          >
            Try again
          </button>
          <Link
            href="/"
            className="border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-5 py-2.5 rounded-full transition-colors text-sm"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
