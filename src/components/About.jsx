import Reveal from './Reveal.jsx'

export default function About({ about, profile }) {
  return (
    <section id="about" className="py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[0.8fr_1.2fr] gap-14 items-center">
        <Reveal y={16} className="relative">
          <div className="relative rounded-2xl overflow-hidden border border-blue-line aspect-square max-w-sm mx-auto md:mx-0">
            <img src={profile.coverImage} alt={`${profile.name} on location`} className="w-full h-full object-cover" />
          </div>
          <div className="absolute -z-10 -top-5 -right-5 w-24 h-24 rounded-full bg-blue-soft/15 hidden md:block" />
        </Reveal>

        <div>
          <Reveal>
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-blue-soft">{about.eyebrow}</span>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink mt-3 mb-6 tracking-tight">
              {about.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-ink-soft text-lg leading-relaxed max-w-xl">{about.bio}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-3">
              {['Storytelling', 'Color Grading', 'Sound Design', 'Self-Taught Editor'].map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 rounded-full bg-blue-line/70 text-blue-deep text-xs font-semibold tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
