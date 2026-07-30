import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Timecode from './Timecode.jsx'

export default function Navbar({ nav, domain }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.offsetTop - 76, behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-canvas/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(123,180,232,0.12)]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-[76px] flex items-center justify-between">
        <button onClick={() => scrollTo('hero')} className="flex items-baseline gap-1 group">
          <span className="font-display font-semibold text-lg text-ink tracking-tight">
            {domain.split('.')[0]}
            <span className="text-blue-soft">.{domain.split('.').slice(1).join('.')}</span>
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollTo(item.target)}
              className="text-xs font-semibold tracking-widest uppercase text-ink-soft hover:text-blue-soft transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-blue-soft group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2 text-ink-faint text-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-rec animate-blink" />
          <Timecode />
        </div>

        <button
          className="md:hidden text-ink text-xl"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <i className={`fas ${open ? 'fa-xmark' : 'fa-bars'}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-paper border-t border-blue-line"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {nav.map((item) => (
                <button
                  key={item.target}
                  onClick={() => scrollTo(item.target)}
                  className="text-left text-sm font-semibold uppercase tracking-widest text-ink-soft hover:text-blue-soft transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
