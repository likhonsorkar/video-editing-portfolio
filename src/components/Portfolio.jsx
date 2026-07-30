import { useMemo, useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from './Reveal.jsx'

export default function Portfolio({ projects }) {
  const ITEMS_PER_PAGE = 6

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(projects.map((p) => p.category)))],
    [projects]
  )

  const [filter, setFilter] = useState('All')
  const [activeProject, setActiveProject] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    setCurrentPage(1)
  }, [filter])

  const filtered =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.category === filter)

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE)

  const paginatedProjects = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  return (
    <section id="portfolio" className="py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-4">
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-blue-soft">
            Featured Projects
          </span>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink mt-3 tracking-tight">
            Selected work from the bin
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 my-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                  filter === cat
                    ? 'bg-blue-deep text-white'
                    : 'bg-paper border border-blue-line text-ink-soft hover:border-blue-soft'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          <AnimatePresence mode="popLayout">
            {paginatedProjects.map((project, i) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group rounded-2xl overflow-hidden bg-paper border border-blue-line hover:border-blue-soft hover:shadow-card-hover transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => setActiveProject(project)}
                  className="relative w-full aspect-video bg-canvas flex items-center justify-center overflow-hidden touch-manipulation"
                >
                  {project.thumbnail && (
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-canvas/90 via-canvas/20 to-transparent" />

                  <div className="relative w-14 h-14 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-soft transition-all duration-300 shadow-glow">
                    <i className="fas fa-play text-blue-deep group-hover:text-white ml-0.5 transition-colors" />
                  </div>

                  <span className="absolute bottom-3 right-3 text-[11px] font-mono tracking-wider text-white/90 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded">
                    {project.duration}
                  </span>
                </button>

                <div className="p-5">
                  <p className="text-[11px] font-mono tracking-widest text-blue-soft uppercase mb-1">
                    {project.category}
                  </p>

                  <h3 className="font-display font-semibold text-lg text-ink mb-1">
                    {project.title}
                  </h3>

                  <p className="text-sm text-ink-soft">{project.role}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-3 mt-12 flex-wrap">
            <button
              onClick={() =>
                setCurrentPage((page) => Math.max(page - 1, 1))
              }
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg border border-blue-line bg-paper hover:border-blue-soft disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }).map((_, index) => {
              const page = index + 1

              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-lg transition ${
                    currentPage === page
                      ? 'bg-blue-deep text-white'
                      : 'border border-blue-line hover:border-blue-soft'
                  }`}
                >
                  {page}
                </button>
              )
            })}

            <button
              onClick={() =>
                setCurrentPage((page) =>
                  Math.min(page + 1, totalPages)
                )
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg border border-blue-line bg-paper hover:border-blue-soft disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-paper rounded-2xl border border-blue-line"
            >
              <div
                className="relative w-full"
                style={{ paddingTop: '56.25%' }}
              >
                <iframe
                  key={activeProject.id}
                  src={`https://drive.google.com/file/d/${activeProject.driveId}/preview`}
                  className="absolute inset-0 w-full h-full touch-manipulation"
                  allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={activeProject.title}
                />
              </div>

              <div className="p-5 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="font-display font-semibold text-ink truncate">
                    {activeProject.title}
                  </h3>

                  <p className="text-sm text-ink-soft">
                    {activeProject.role}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={`https://drive.google.com/file/d/${activeProject.driveId}/view`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-blue-line flex items-center justify-center text-ink-soft hover:text-blue-soft hover:border-blue-soft transition-colors"
                  >
                    <i className="fas fa-up-right-from-square text-sm" />
                  </a>

                  <button
                    type="button"
                    onClick={() => setActiveProject(null)}
                    className="w-9 h-9 rounded-full border border-blue-line flex items-center justify-center text-ink-soft hover:bg-canvas transition-colors"
                  >
                    <i className="fas fa-xmark" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}