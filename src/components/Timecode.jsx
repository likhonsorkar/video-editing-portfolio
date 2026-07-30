import { useEffect, useState } from 'react'

// A running HH:MM:SS:FF timecode, styled after an NLE playhead readout.
// Purely decorative — reinforces the "inside the edit bay" theme used across the page.
export default function Timecode({ className = '' }) {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setFrame((f) => f + 1), 1000 / 24)
    return () => clearInterval(id)
  }, [])

  const totalFrames = frame
  const fps = 24
  const ff = totalFrames % fps
  const totalSeconds = Math.floor(totalFrames / fps)
  const ss = totalSeconds % 60
  const mm = Math.floor(totalSeconds / 60) % 60
  const hh = Math.floor(totalSeconds / 3600)

  const pad = (n) => String(n).padStart(2, '0')

  return (
    <span className={`timecode font-mono ${className}`}>
      {pad(hh)}:{pad(mm)}:{pad(ss)}:{pad(ff)}
    </span>
  )
}
