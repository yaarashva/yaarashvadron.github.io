'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import ProjectCard from '@/components/ui/ProjectCard'
import { projects } from '@/content/projects'

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-28 section-padding">
      <div className="container-max">
        <SectionHeader
          label="Strategic Work"
          title="Selected initiatives & impact."
          subtitle="A look into the work that's shaped how I think about CS leadership, AI adoption, and organizational scale."
        />

        {/* Featured projects */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <ProjectCard project={project} featured={project.id === featured[0]?.id && featured.length < 3} />
            </motion.div>
          ))}
        </div>

        {/* Supporting projects */}
        {rest.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        )}

        {/* File-based content note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 p-6 rounded-2xl border border-dashed border-[var(--border)] text-center"
        >
          <p className="text-sm text-muted">
            Additional project materials — PDFs, slide decks, case studies — can be added to{' '}
            <code className="text-xs bg-sand-100 dark:bg-sand-900 px-1.5 py-0.5 rounded">public/projects/</code>
            {' '}and will appear here automatically.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
