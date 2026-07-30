import Reveal from './Reveal.jsx'

export default function Skills({ skills }) {
  return (
    <section id="skills" className="py-28 md:py-36 bg-paper border-y border-blue-line">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-blue-soft">{skills.eyebrow}</span>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink mt-3 mb-5 tracking-tight">
            {skills.heading}
          </h2>
        </Reveal>

        {/* DaVinci Resolve — master tool panel, full-width box layout */}
        <Reveal delay={0.1}>
          <div className="w-full rounded-2xl bg-paper-soft border border-blue-line p-8 sm:p-10 lg:p-12 mb-16 relative overflow-hidden">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_90%_-10%,rgba(76,127,224,0.28),transparent_55%)]" />
            <div className="relative grid lg:grid-cols-[minmax(260px,340px)_1fr] gap-10 items-center">
              <div>
                <p className="text-[11px] font-mono tracking-widest text-blue-soft uppercase mb-2">Master Tool</p>
                <h3 className="font-display font-semibold text-3xl sm:text-4xl text-ink mb-3">
                  {skills.masterTool.name}
                </h3>
                <p className="text-ink-soft leading-relaxed">{skills.masterTool.tagline}</p>
              </div>

              <div className="grid sm:grid-cols-3 gap-5">
                {skills.masterTool.highlights.map((h) => (
                  <div
                    key={h.label}
                    className="group flex flex-col items-start gap-4 p-6 rounded-xl bg-canvas border border-blue-line hover:border-blue-soft hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-11 h-11 rounded-lg bg-blue-soft/15 flex items-center justify-center group-hover:bg-blue-soft/25 transition-colors">
                      <i className={`fas ${h.icon} text-blue-soft`} />
                    </div>
                    <span className="font-display font-medium text-base text-ink leading-snug">{h.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-6">
          {skills.categories.map((cat, i) => (
            <Reveal key={cat.id} delay={0.1 * i}>
              <div className="group h-full p-7 rounded-2xl bg-canvas border border-blue-line hover:border-blue-soft hover:-translate-y-1 hover:shadow-glow transition-all duration-300">
                <div className="w-11 h-11 rounded-lg bg-blue-soft/15 flex items-center justify-center mb-5 group-hover:bg-blue-soft/25 transition-colors">
                  <i className={`fas ${cat.icon} text-blue-soft`} />
                </div>
                <p className="text-[11px] font-mono tracking-widest text-ink-faint uppercase mb-1">{cat.subtitle}</p>
                <h3 className="font-display font-semibold text-lg text-ink mb-2">{cat.title}</h3>
                <p className="text-sm text-ink-soft leading-relaxed">{cat.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
