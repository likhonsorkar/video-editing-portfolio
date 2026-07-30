import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from './Reveal.jsx'

export default function Gallery({ gallery }) {
  const [active, setActive] = useState(null)

  if (!gallery || !gallery.show || !gallery.photos?.length) return null

  return (
    <section id="gallery" className="py-28 md:py-36 bg-paper border-y border-blue-line">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-blue-soft">{gallery.eyebrow}</span>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink mt-3 tracking-tight">
            {gallery.heading}
          </h2>
        </Reveal>

        <div className="columns-2 sm:columns-3 gap-4 [column-fill:_balance]">
          {gallery.photos.map((photo, i) => (
            <Reveal key={photo.id} delay={i * 0.05} className="mb-4 break-inside-avoid">
              <button
                type="button"
                onClick={() => setActive(photo)}
                className="group relative w-full rounded-xl overflow-hidden border border-blue-line hover:border-blue-soft transition-colors duration-300 touch-manipulation"
              >
                <img
                  src={photo.src}
                  alt={photo.caption || gallery.heading}
                  loading="lazy"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-canvas/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {photo.caption && (
                  <span className="absolute bottom-3 left-3 text-[11px] font-mono tracking-wide text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {photo.caption}
                  </span>
                )}
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={active.src} alt={active.caption} className="w-full h-auto rounded-xl border border-blue-line" />
              <button
                onClick={() => setActive(null)}
                className="absolute -top-4 -right-4 w-9 h-9 rounded-full bg-paper border border-blue-line flex items-center justify-center text-ink-soft hover:text-ink transition-colors"
                aria-label="Close photo"
              >
                <i className="fas fa-xmark" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
