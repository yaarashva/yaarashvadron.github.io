'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Wire to Resend, FormSpree, or your preferred email service
    // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-28 section-padding bg-sand-50 dark:bg-sand-950/60">
      <div className="container-max max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="block text-xs font-medium tracking-[0.2em] uppercase text-muted mb-4">Contact</span>
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--foreground)] leading-tight mb-6">
            Let&apos;s connect.
          </h2>
          <p className="text-lg text-muted leading-relaxed max-w-xl mx-auto">
            Whether you want to talk about CS strategy, AI adoption, a speaking opportunity, or just have a conversation — I&apos;m glad to hear from you.
          </p>
        </motion.div>

        {/* Direct links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <a
            href="https://www.linkedin.com/in/yaarashvadron/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3.5 rounded-full border border-[var(--border)] text-[var(--foreground)] text-sm font-medium hover:border-accent-DEFAULT dark:hover:border-accent-light transition-colors duration-200 group"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-muted group-hover:text-accent-DEFAULT dark:group-hover:text-accent-light transition-colors">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          <a
            href="mailto:hello@yaarashvadron.com"
            className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-[var(--foreground)] text-[var(--background)] text-sm font-medium hover:opacity-80 transition-opacity duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            hello@yaarashvadron.com
          </a>
        </motion.div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8 md:p-12"
        >
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-12 h-12 rounded-full bg-accent-DEFAULT/10 flex items-center justify-center mx-auto mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-DEFAULT">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-[var(--foreground)] mb-2">Message received.</h3>
              <p className="text-muted">I&apos;ll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium tracking-wide uppercase text-muted mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder-sand-400 focus:outline-none focus:border-accent-DEFAULT dark:focus:border-accent-light transition-colors text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium tracking-wide uppercase text-muted mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder-sand-400 focus:outline-none focus:border-accent-DEFAULT dark:focus:border-accent-light transition-colors text-sm"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium tracking-wide uppercase text-muted mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] placeholder-sand-400 focus:outline-none focus:border-accent-DEFAULT dark:focus:border-accent-light transition-colors text-sm resize-none"
                  placeholder="What's on your mind?"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[var(--foreground)] text-[var(--background)] text-sm font-medium tracking-wide hover:opacity-80 transition-opacity duration-200"
              >
                Send message
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
