'use client'

import { motion } from 'framer-motion'

interface SectionHeaderProps {
  label?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export default function SectionHeader({ label, title, subtitle, align = 'left' }: SectionHeaderProps) {
  const isCenter = align === 'center'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`mb-16 ${isCenter ? 'text-center' : ''}`}
    >
      {label && (
        <span className="block text-xs font-medium tracking-[0.2em] uppercase text-muted mb-4">
          {label}
        </span>
      )}
      <h2 className={`font-serif text-4xl md:text-5xl text-[var(--foreground)] leading-tight ${isCenter ? 'mx-auto' : ''}`}>
        {title}
      </h2>
      {!isCenter && <div className="w-10 h-px bg-accent-DEFAULT mt-6" />}
      {subtitle && (
        <p className={`mt-6 text-lg text-muted leading-relaxed max-w-2xl ${isCenter ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
