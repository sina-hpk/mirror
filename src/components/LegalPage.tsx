import Header from '@/components/Header'
import Footer from '@/components/Footer'

type LegalSection = {
  heading: string
  paragraphs: string[]
  bullets?: string[]
}

export default function LegalPage({
  title,
  badge,
  intro,
  sections,
}: {
  title: string
  badge: string
  intro: string
  sections: LegalSection[]
}) {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden bg-surface-950 pt-28 pb-16 md:pt-36 md:pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950 via-surface-950 to-surface-950" aria-hidden="true" />
          <div className="absolute inset-0 bg-grid-dark [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,black,transparent)]" aria-hidden="true" />
          <div className="absolute -top-32 right-[10%] h-80 w-80 rounded-full bg-primary-600/20 blur-3xl" aria-hidden="true" />
          <div className="container-custom relative text-center">
            <span className="badge-dark mb-6">{badge}</span>
            <h1 className="text-3xl font-extrabold text-white md:text-4xl lg:text-5xl tracking-tight">{title}</h1>
          </div>
        </section>

        {/* Content */}
        <section className="section bg-surface-50">
          <div className="container-custom max-w-3xl">
            <div className="card p-8 md:p-12">
              <p className="text-lg text-surface-600 leading-relaxed pb-6 mb-8 border-b border-surface-100">{intro}</p>
              <div className="space-y-10">
                {sections.map((section, i) => (
                  <div key={section.heading}>
                    <h2 className="text-lg font-bold text-surface-900 mb-4 flex items-baseline gap-3">
                      <span className="text-primary-500 font-extrabold">{String(i + 1).padStart(2, '۰').replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[+d])}.</span>
                      {section.heading}
                    </h2>
                    <div className="space-y-3">
                      {section.paragraphs.map((p, j) => (
                        <p key={j} className="text-surface-600 leading-relaxed text-sm">{p}</p>
                      ))}
                      {section.bullets && (
                        <ul className="space-y-2 pr-5 mt-4" role="list">
                          {section.bullets.map((b, j) => (
                            <li key={j} className="text-surface-600 text-sm leading-relaxed list-disc">{b}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
