import Reveal from './Reveal.jsx'

export default function Education({ education }) {
  return (
    <section id="education" className="py-28 md:py-36 bg-paper border-y border-blue-line">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-blue-soft">Education</span>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink mt-3 tracking-tight">
            The timeline so far
          </h2>
        </Reveal>

        <div className="relative pl-8 sm:pl-10">
          {/* Track line — the "timeline" motif */}
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-[2px] bg-blue-line" />

          <div className="space-y-10">
            {education.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.08} y={16}>
                <div className="relative">
                  <span
                    className={`absolute -left-8 sm:-left-10 top-1.5 w-4 h-4 rounded-full border-2 ${
                      item.status === 'current'
                        ? 'bg-blue-deep border-blue-deep'
                        : 'bg-paper border-blue-soft'
                    }`}
                  />
                  {item.status === 'current' && (
                    <span className="absolute -left-8 sm:-left-10 top-1.5 w-4 h-4 rounded-full bg-blue-deep animate-ping opacity-40" />
                  )}
                  <div className="p-6 rounded-xl bg-canvas border border-blue-line hover:border-blue-soft transition-colors duration-300">
                    {item.period && (
                      <div className="flex flex-wrap items-center gap-3 mb-1.5">
                        <span className="text-[11px] font-mono tracking-wider text-blue-soft">{item.period}</span>
                        {item.status === 'current' && (
                          <span className="text-[10px] font-semibold uppercase tracking-widest bg-rec/10 text-rec px-2 py-0.5 rounded-full">
                            In Progress
                          </span>
                        )}
                      </div>
                    )}
                    <h3 className="font-display font-semibold text-lg text-ink">{item.institution}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
