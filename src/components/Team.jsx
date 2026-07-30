import Reveal from './Reveal.jsx'

export default function Team({ team }) {
  if (!team || !team.show || !team.members?.length) return null

  return (
    <section id="team" className="py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-blue-soft">{team.eyebrow}</span>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink mt-3 tracking-tight">
            {team.heading}
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.members.map((member, i) => (
            <Reveal key={member.id} delay={i * 0.08}>
              <div className="group rounded-2xl overflow-hidden bg-paper border border-blue-line hover:border-blue-soft hover:shadow-glow transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-lg text-ink">{member.name}</h3>
                  <p className="text-sm text-blue-soft mt-1">{member.skill}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
