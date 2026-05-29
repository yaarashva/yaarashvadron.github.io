'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Project } from '@/lib/types'

interface ProjectCardProps {
  project: Project
  featured?: boolean
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.article
      layout
      onClick={() => setExpanded(!expanded)}
      className={`group cursor-pointer border border-[var(--border)] rounded-2xl p-8 transition-shadow duration-300 hover:shadow-lg bg-[var(--card)] ${
        featured ? 'md:col-span-2' : ''
      }`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="tag-pill">{project.category}</span>
            {project.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="tag-pill">{tag}</span>
            ))}
          </div>
          <h3 className="font-serif text-xl md:text-2xl text-[var(--foreground)] leading-snug group-hover:text-accent-DEFAULT dark:group-hover:text-accent-light transition-colors duration-200">
            {project.title}
          </h3>
        </div>
        <div className="flex-shrink-0 mt-1">
          <motion.div
            animate={{ rotate: expanded ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-[var(--border)] text-muted"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </motion.div>
        </div>
      </div>

      <p className="text-muted leading-relaxed mb-4">{project.summary}</p>

      {project.impact && (
        <div className="flex items-start gap-3 p-4 rounded-xl bg-sand-50 dark:bg-sand-900/40 border border-[var(--border)]">
          <span className="text-accent-DEFAULT text-sm mt-0.5">→</span>
          <p className="text-sm text-[var(--foreground)] font-medium">{project.impact}</p>
        </div>
      )}

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="pt-6 mt-6 border-t border-[var(--border)]">
              <div className="prose prose-sm dark:prose-invert max-w-none text-muted leading-relaxed whitespace-pre-line">
                {project.description}
              </div>
              {project.tags.length > 2 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.slice(2).map((tag) => (
                    <span key={tag} className="tag-pill">{tag}</span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}
