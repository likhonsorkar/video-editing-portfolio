import { useState } from 'react'
import Reveal from './Reveal.jsx'

export default function Contact({ contact, profile }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const composedMessage = () => {
    const name = form.name || 'there';
    const msg = form.message || "I'd like to talk about a project."
    return `Hi ${profile.name}, this is ${name}. ${msg}`
  }

  const handleSms = (e) => {
    e.preventDefault()
    const body = encodeURIComponent(composedMessage())
    window.location.href = `sms:${contact.sms.number}?body=${body}`
  }

  const handleWhatsapp = (e) => {
    e.preventDefault()
    const text = encodeURIComponent(composedMessage())
    window.open(`https://wa.me/${contact.whatsapp.number}?text=${text}`, '_blank')
  }

  const handleEmail = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`New project inquiry from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(
      `Name: ${form.name || '-'}\nEmail: ${form.email || '-'}\n\n${form.message || ''}`
    )
    window.location.href = `mailto:${contact.email.address}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="py-28 md:py-36">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal className="text-center mb-14">
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-blue-soft">{contact.eyebrow}</span>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink mt-3 tracking-tight">
            {contact.heading}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={update('name')}
                className="w-full px-4 py-3.5 rounded-lg border border-blue-line bg-paper focus:outline-none focus:border-blue-soft focus:ring-4 focus:ring-blue-soft/10 transition-all"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={update('email')}
                className="w-full px-4 py-3.5 rounded-lg border border-blue-line bg-paper focus:outline-none focus:border-blue-soft focus:ring-4 focus:ring-blue-soft/10 transition-all"
              />
            </div>
            <textarea
              placeholder="Tell me about your project"
              rows={5}
              value={form.message}
              onChange={update('message')}
              className="w-full px-4 py-3.5 rounded-lg border border-blue-line bg-paper focus:outline-none focus:border-blue-soft focus:ring-4 focus:ring-blue-soft/10 transition-all resize-none"
            />

            <div className="grid sm:grid-cols-3 gap-3 pt-2">
              <button
                onClick={handleSms}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-blue-glow border border-blue-line text-white text-sm font-semibold hover:-translate-y-0.5 hover:border-blue-soft hover:shadow-glow transition-all duration-300"
              >
                <i className="fas fa-comment-sms" /> {contact.sms.label}
              </button>
              <button
                onClick={handleWhatsapp}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-[#25D366] text-white text-sm font-semibold hover:-translate-y-0.5 hover:shadow-card transition-all duration-300"
              >
                <i className="fab fa-whatsapp" /> {contact.whatsapp.label}
              </button>
              <button
                onClick={handleEmail}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-blue-deep text-white text-sm font-semibold hover:-translate-y-0.5 hover:shadow-card transition-all duration-300"
              >
                <i className="fas fa-envelope" /> {contact.email.label}
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
