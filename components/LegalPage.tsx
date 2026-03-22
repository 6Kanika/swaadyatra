import Link from "next/link";

interface SubSection {
  heading: string;
  body: string;
}

interface LegalSection {
  heading?: string;
  body?: string;
  items?: string[];
  subsections?: SubSection[];
}

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
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
        <div className="space-y-8">
          {sections.map((section, i) => (
            <div key={i}>
              {section.heading && (
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {i + 1}. {section.heading}
                </h2>
              )}
              {section.body && (
                <p className="text-gray-600 leading-relaxed text-sm mb-3">{section.body}</p>
              )}
              {section.items && section.items.length > 0 && (
                <ul className="list-disc list-inside space-y-1.5 text-gray-600 text-sm pl-2">
                  {section.items.map((item, j) => (
                    <li key={j} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              )}
              {section.subsections && section.subsections.map((sub, k) => (
                <div key={k} className="mt-4 pl-4 border-l-2 border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-700 mb-1">{sub.heading}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{sub.body}</p>
                </div>
              ))}
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
