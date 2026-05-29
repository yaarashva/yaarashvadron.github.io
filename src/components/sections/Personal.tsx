'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import { personalItems, philosophy } from '@/content/personal'

export default function Personal() {
  return (
    <section id="personal" className="py-28 section-padding">
      <div className="container-max">
        <SectionHeader
          label="Beyond the Resume"
          title="What makes me, me."
        />

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 max-w-3xl"
        >
          <p className="text-lg text-muted leading-relaxed whitespace-pre-line">
            {philosophy.body}
          </p>
        </motion.div>

        {/* Personal items grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalItems.map((item, i) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group p-8 rounded-2xl border border-[var(--border)] bg-[var(--card)] hover:border-accent-DEFAULT/40 dark:hover:border-accent-light/30 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl text-muted group-hover:text-accent-DEFAULT dark:group-hover:text-accent-light transition-colors duration-200 font-serif">
                  {item.icon}
                </span>
                <h3 className="font-medium text-sm tracking-wide uppercase text-muted">{item.category}</h3>
              </div>

              {item.description && (
                <p className="text-sm text-muted leading-relaxed mb-4 italic">
                  &ldquo;{item.description}&rdquo;
                </p>
              )}

              <ul className="space-y-2">
                {item.items.map((thing, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="text-accent-DEFAULT/60 flex-shrink-0 mt-1 text-xs">—</span>
                    <span className="text-sm text-[var(--foreground)] leading-snug">{thing}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Closing quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <p className="font-serif text-2xl md:text-3xl text-[var(--foreground)] italic max-w-2xl mx-auto leading-relaxed">
            &ldquo;Built on every trail, every negotiation, every language, every border.&rdquo;
          </p>
          <div className="w-8 h-px bg-accent-DEFAULT mx-auto mt-6" />
        </motion.div>
      </div>
    </section>
  )
}
