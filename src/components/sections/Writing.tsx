'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import { articles } from '@/content/writing'
import { formatDate } from '@/lib/utils'

export default function Writing() {
  return (
    <section id="writing" className="py-28 section-padding bg-sand-50 dark:bg-sand-950/60">
      <div className="container-max">
        <SectionHeader
          label="Thought Leadership"
          title="Ideas worth writing down."
          subtitle="On CS strategy, AI adoption, organizational alignment, and what I've learned from unlikely places."
        />

        <div className="grid gap-px bg-[var(--border)] rounded-2xl overflow-hidden border border-[var(--border)]">
          {articles.map((article, i) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[var(--card)] group cursor-pointer p-8 hover:bg-sand-50 dark:hover:bg-sand-900/40 transition-colors duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                {/* Index number */}
                <span className="flex-shrink-0 font-serif text-5xl text-sand-200 dark:text-sand-800 leading-none select-none group-hover:text-accent-DEFAULT/30 dark:group-hover:text-accent-light/20 transition-colors duration-300">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {article.tags.map((tag) => (
                      <span key={tag} className="tag-pill">{tag}</span>
                    ))}
                  </div>

                  <h3 className="font-serif text-xl md:text-2xl text-[var(--foreground)] leading-snug mb-3 group-hover:text-accent-DEFAULT dark:group-hover:text-accent-light transition-colors duration-200">
                    {article.title}
                  </h3>

                  <p className="text-muted leading-relaxed mb-4 text-sm md:text-base">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-muted">
                    <span>{formatDate(article.date)}</span>
                    <span className="w-1 h-1 rounded-full bg-[var(--border)]" />
                    <span>{article.readTime} min read</span>
                    {article.external && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-[var(--border)]" />
                        <span className="text-accent-DEFAULT dark:text-accent-light">External ↗</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden sm:flex flex-shrink-0 items-center self-center">
                  <motion.div
                    className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center text-muted group-hover:border-accent-DEFAULT group-hover:text-accent-DEFAULT dark:group-hover:border-accent-light dark:group-hover:text-accent-light transition-colors duration-200"
                    whileHover={{ x: 4 }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center text-sm text-muted"
        >
          More articles coming. Add markdown files to{' '}
          <code className="text-xs bg-sand-100 dark:bg-sand-900 px-1.5 py-0.5 rounded">src/content/writing.ts</code>
          {' '}to publish new pieces.
        </motion.p>
      </div>
    </section>
  )
}
