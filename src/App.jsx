import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Portfolio from './components/Portfolio.jsx'
import Gallery from './components/Gallery.jsx'
import Team from './components/Team.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import localData from './data.json'

// Live content API — update this JSON on your server to change the site without redeploying.
// If it's unreachable, the bundled local data.json (below) is used automatically.
const REMOTE_DATA_URL = 'https://likhon.com.bd/web/json/jahidul-json'

async function fetchWithTimeout(url, ms = 6000) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), ms)
  try {
    const res = await fetch(url, { signal: controller.signal, cache: 'no-store' })
    if (!res.ok) throw new Error(`Request failed: ${res.status}`)
    return await res.json()
  } finally {
    clearTimeout(timer)
  }
}

export default function App() {
  const [data, setData] = useState(null)
  const [source, setSource] = useState(null) // 'remote' | 'local'

  useEffect(() => {
    let cancelled = false

    fetchWithTimeout(REMOTE_DATA_URL)
      .then((json) => {
        if (cancelled) return
        setData(json)
        setSource('remote')
      })
      .catch(() => {
        // Remote API unreachable or invalid — fall back to the bundled local JSON.
        if (cancelled) return
        setData(localData)
        setSource('local')
      })

    return () => {
      cancelled = true
    }
  }, [])

  const nav = useMemo(() => {
    if (!data) return []
    const items = [...data.nav]
    const portfolioIdx = items.findIndex((n) => n.target === 'portfolio')
    if (data.gallery?.show && portfolioIdx !== -1) {
      items.splice(portfolioIdx + 1, 0, { label: 'Gallery', target: 'gallery' })
    }
    const skillsIdx = items.findIndex((n) => n.target === 'skills')
    if (data.team?.show && skillsIdx !== -1) {
      items.splice(skillsIdx + 1, 0, { label: 'Team', target: 'team' })
    }
    return items
  }, [data])

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-canvas text-ink-soft font-mono text-sm gap-3">
        <span className="w-2 h-2 rounded-full bg-rec animate-blink" />
        Loading reel…
      </div>
    )
  }

  return (
    <div className="min-h-screen overflow-x-hidden relative">
      <div className="grain-overlay fixed inset-0 pointer-events-none z-[1]" aria-hidden="true" />
      <div className="relative z-[2]">
        <Navbar nav={nav} domain={data.profile.domain} />
        <Hero hero={data.hero} profile={data.profile} />
        <About about={data.about} profile={data.profile} />
        <Skills skills={data.skills} />
        <Portfolio projects={data.projects} />
        <Gallery gallery={data.gallery} />
        <Team team={data.team} />
        <Education education={data.education} />
        <Contact contact={data.contact} profile={data.profile} />
        <Footer profile={data.profile} social={data.social} developer={data.developer} />
      </div>
      {import.meta.env.DEV && (
        <div className="fixed bottom-3 left-3 z-[200] text-[10px] font-mono text-ink-faint bg-canvas/80 border border-blue-line rounded px-2 py-1">
          data: {source}
        </div>
      )}
    </div>
  )
}
