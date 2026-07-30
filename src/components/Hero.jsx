import { motion } from 'framer-motion'
import Timecode from './Timecode.jsx'

export default function Hero({ hero, profile }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.offsetTop - 76, behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Ambient glow — light spilling from an edit-bay monitor, drifting gently */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-20 w-[560px] h-[560px] rounded-full bg-blue-glow/40 blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 -left-20 w-[420px] h-[420px] rounded-full bg-blue-deep/20 blur-3xl animate-float" />
        <div className="absolute top-1/3 left-1/2 w-[300px] h-[300px] rounded-full bg-blue-soft/10 blur-3xl animate-float-slow" />
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.1fr_0.9fr] gap-16 items-center relative">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display font-semibold text-[2.4rem] sm:text-5xl md:text-6xl leading-[1.08] tracking-tight text-ink"
          >
            {hero.headlinePrefix}
            <br />
            <span className="gradient-text">{hero.headlineAccent}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-lg text-ink-soft max-w-lg"
          >
            {hero.subheadline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-1 font-display text-xl text-ink font-medium"
          >
            {profile.name}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollTo(hero.ctaPrimary.target)}
              className="px-7 py-3.5 rounded-lg bg-blue-deep text-white font-semibold text-sm tracking-wide shadow-glow hover:bg-blue-bright hover:-translate-y-0.5 hover:shadow-card-hover transition-all duration-300"
            >
              {hero.ctaPrimary.label}
            </button>
            <button
              onClick={() => scrollTo(hero.ctaSecondary.target)}
              className="px-7 py-3.5 rounded-lg border border-blue-line text-ink font-semibold text-sm tracking-wide hover:border-blue-soft hover:bg-paper transition-all duration-300"
            >
              {hero.ctaSecondary.label}
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-card border border-blue-line bg-paper aspect-[4/5]">
            <img
              src={profile.profileImage}
              alt={profile.name}
              className="w-full h-full object-cover"
            />
            {/* Viewfinder frame overlay */}
            <div className="absolute inset-3 border border-white/50 rounded-lg pointer-events-none" />
            {/* Light-beam sweep — signature motion accent */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 -left-1/3 w-1/3 h-full bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 animate-beam" />
            </div>
            <div className="absolute top-5 left-5 flex items-center gap-2 text-white text-[11px] font-mono tracking-widest bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded">
              <span className="w-1.5 h-1.5 rounded-full bg-rec animate-blink" />
              REC
            </div>
            <div className="absolute bottom-5 right-5 text-white text-[11px] font-mono tracking-widest bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded">
              <Timecode />
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-2xl bg-blue-soft/15 -z-10" />
        </motion.div>
      </div>
    </section>
  )
}
