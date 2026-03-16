import Link from "next/link";

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  sections: { heading?: string; body: string }[];
}

export default function LegalPage({ title, lastUpdated, sections }: LegalPageProps) {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        {/* Header */}
        <div className="mb-8 border-b border-gray-200 pb-6">
          <Link href="/" className="text-sm text-[#E23744] hover:underline mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          <p className="text-sm text-gray-500 mt-2">Last updated: {lastUpdated}</p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, i) => (
            <div key={i}>
              {section.heading && (
                <h2 className="text-lg font-semibold text-gray-800 mb-2">{section.heading}</h2>
              )}
              <p className="text-gray-600 leading-relaxed text-sm">{section.body}</p>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-wrap gap-4 text-sm text-gray-400">
          <Link href="/privacy" className="hover:text-[#E23744] transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-[#E23744] transition-colors">Terms of Service</Link>
          <Link href="/disclaimer" className="hover:text-[#E23744] transition-colors">Disclaimer</Link>
        </div>
      </div>
    </main>
  );
}
