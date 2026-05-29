'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import { philosophy } from '@/content/personal'

const timelineItems = [
  { period: '2006', event: 'Gap year volunteering at a youth village for at-risk teenagers' },
  { period: '2008–13', event: 'IDF Liaison Unit: commanded a UN coordination operations room, then led Israeli-Jordanian military liaison' },
  { period: '2014–16', event: 'MA in International Relations & Music, Hebrew University — completed with honors' },
  { period: '2014–16', event: 'Research assistant at the Hebrew University and Israeli Ministry of Foreign Affairs' },
  { period: '2017–18', event: 'Traveled abroad, met future partner in China, moved toward enterprise SaaS' },
  { period: '2021–', event: 'Senior CS Leader at JAGGAER, relocating to Durham, NC' },
]

export default function About() {
  return (
    <section id="about" className="py-28 section-padding">
      <div className="container-max">
        <SectionHeader
          label="About"
          title="A strategist built at the intersection of service, scholarship, and scale."
        />

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Bio text */}
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7 }}
              className="text-xl md:text-2xl font-serif text-[var(--foreground)] leading-relaxed"
            >
              I'm a Strategic Customer Success Executive who cares deeply about customers'
              experience and trust.
            </motion.p>

            {[
              `I grew up in Israel — to parents who knew every trail and corner of the country by foot and heart. That groundedness, that sense of earned knowledge, has stayed with me. My path to enterprise software ran through a gap year volunteering with teenagers at society's margins, officer training, and commanding operations between UN and Israeli forces along the Lebanon border.`,
              `After coordinating Israeli-Jordanian liaison operations — agriculture, health, water, security — across two sovereign militaries, I pursued a Bachelor's and Master's in International Relations and Music at Hebrew University. My research examined the conditions that lead countries to form lasting special partnerships. The question turned out to apply to enterprise relationships, too.`,
              `I spent time as a research assistant providing intelligence analysis to Israeli ambassadors worldwide. Then I traveled, met my partner in China, and eventually found my way into Enterprise SaaS. Now I lead Customer Success at JAGGAER in Durham, NC — where I live with my partner and two children.`,
            ].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="text-muted leading-relaxed"
              >
                {text}
              </motion.p>
            ))}

            {/* Philosophy quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 pl-6 border-l-2 border-accent-DEFAULT"
            >
              <p className="font-serif text-xl md:text-2xl text-[var(--foreground)] italic leading-relaxed">
                &ldquo;{philosophy.headline}&rdquo;
              </p>
            </motion.blockquote>
          </div>

          {/* Right: Timeline */}
          <div className="relative">
            <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-accent-DEFAULT/60 via-[var(--border)] to-transparent" />

            <div className="space-y-10 pl-12">
              {timelineItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="relative"
                >
                  {/* Dot */}
                  <div className="absolute -left-[2.05rem] top-1.5 w-2 h-2 rounded-full border-2 border-accent-DEFAULT bg-[var(--background)]" />

                  <span className="block text-xs font-medium tracking-widest uppercase text-accent-DEFAULT dark:text-accent-light mb-2">
                    {item.period}
                  </span>
                  <p className="text-[var(--foreground)] leading-snug">{item.event}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
