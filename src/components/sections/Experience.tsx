'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import { experience } from '@/content/experience'

const typeLabels: Record<string, string> = {
  corporate: 'Industry',
  military: 'Service',
  academic: 'Academic',
  advisory: 'Volunteer',
}

export default function Experience() {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <section id="experience" className="py-28 section-padding bg-sand-50 dark:bg-sand-950/60">
      <div className="container-max">
        <SectionHeader
          label="Experience"
          title="A career built on complexity, trust, and outcomes."
          subtitle="From coordinating UN peacekeeping operations to leading AI-native CS organizations — the through-line has always been alignment."
        />

        <div className="space-y-0">
          {experience.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
            >
              <button
                onClick={() => setActiveId(activeId === item.id ? null : item.id)}
                className="w-full text-left group py-8 border-b border-[var(--border)] focus:outline-none"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                  {/* Period + type */}
                  <div className="flex-shrink-0 md:w-44">
                    <span className="block text-xs font-medium tracking-widest uppercase text-accent-DEFAULT dark:text-accent-light mb-1">
                      {typeLabels[item.type]}
                    </span>
                    <span className="block text-sm text-muted">{item.period}</span>
                    <span className="block text-xs text-muted mt-1">{item.location}</span>
                  </div>

                  {/* Role + company */}
                  <div className="flex-1 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl text-[var(--foreground)] group-hover:text-accent-DEFAULT dark:group-hover:text-accent-light transition-colors duration-200 leading-tight mb-1">
                        {item.role}
                      </h3>
                      <p className="text-sm text-muted font-medium">{item.company}</p>
                    </div>

                    <motion.div
                      animate={{ rotate: activeId === item.id ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex-shrink-0 mt-1 text-muted group-hover:text-[var(--foreground)] transition-colors"
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.div>
                  </div>
                </div>

                {/* Expanded content */}
                <motion.div
                  initial={false}
                  animate={{ height: activeId === item.id ? 'auto' : 0, opacity: activeId === item.id ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="overflow-hidden"
                >
                  <div className="md:pl-52 pt-6 pb-2">
                    <p className="text-muted leading-relaxed mb-6">{item.description}</p>
                    <ul className="space-y-3">
                      {item.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span className="text-accent-DEFAULT flex-shrink-0 mt-1">→</span>
                          <span className="text-sm text-[var(--foreground)] leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
