'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const titleWords = ['Customer', 'Success', '&', 'Enterprise', 'Strategy', 'Leader']

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center grain-overlay overflow-hidden">
      {/* Soft background blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-sand-200/50 dark:bg-sand-900/30 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-accent-light/20 dark:bg-accent-dark/10 blur-3xl" />
      </div>

      <div className="relative z-10 section-padding container-max pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-8 h-px bg-accent-DEFAULT" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted">
                Durham, NC · Global
              </span>
            </motion.div>

            <h1 className="font-serif text-6xl md:text-7xl xl:text-8xl text-[var(--foreground)] leading-[0.95] mb-8">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="block"
              >
                Yaara
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="block italic text-accent-DEFAULT dark:text-accent-light"
              >
                Shvadron
              </motion.span>
            </h1>

            <div className="flex flex-wrap gap-x-2 gap-y-1 mb-10" aria-label="Title">
              {titleWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.07 }}
                  className={`text-lg md:text-xl font-sans font-light tracking-wide ${
                    word === '&' ? 'text-muted' : 'text-[var(--foreground)]'
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-base md:text-lg text-muted leading-relaxed max-w-md mb-12"
            >
              Scaling global CS organizations. Driving outcomes that matter.
              Building partnerships grounded in trust.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-7 py-3.5 rounded-full bg-[var(--foreground)] text-[var(--background)] text-sm font-medium tracking-wide hover:opacity-80 transition-opacity duration-200"
              >
                Explore my work
              </button>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-7 py-3.5 rounded-full border border-[var(--border)] text-[var(--foreground)] text-sm font-medium tracking-wide hover:border-[var(--foreground)] transition-colors duration-200"
              >
                Get in touch
              </button>
            </motion.div>
          </div>

          {/* Right: Portrait placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 rounded-3xl border border-sand-200 dark:border-sand-800 opacity-60" />
              <div className="absolute -inset-8 rounded-3xl border border-sand-200/40 dark:border-sand-800/40 opacity-40" />

              {/* Portrait */}
              <div className="relative w-80 h-96 xl:w-96 xl:h-[480px] rounded-2xl overflow-hidden bg-sand-100 dark:bg-sand-900">
                <Image
                  src="/portrait.jpg"
                  alt="Yaara Shvadron"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Floating accent card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-8 bg-[var(--card)] border border-[var(--border)] rounded-xl p-4 shadow-lg max-w-[160px]"
              >
                <p className="text-xs text-muted mb-1">Current focus</p>
                <p className="text-sm font-medium text-[var(--foreground)] leading-snug">AI-Native CS Leadership</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-[var(--border)] to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
