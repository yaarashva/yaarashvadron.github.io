import type { Project } from '@/lib/types'

export const projects: Project[] = [
  {
    id: 'rag-customer-intelligence',
    title: 'Unified Customer Intelligence Platform',
    category: 'AI & Product Innovation',
    tags: ['AI', 'RAG Architecture', 'Customer Success', 'Proof of Concept'],
    summary:
      'Built a proof-of-concept customer intelligence platform on RAG architecture, integrating live data from 6+ enterprise systems into a single, queryable view — eliminating manual, fragmented account research.',
    description: `Account preparation that once took hours was reduced to minutes. The platform integrates Salesforce, Snowflake, email threads, and CSM notes into a unified interface, allowing customer-facing teams to surface insights instantly.

The proof-of-concept won the company-wide AI showcase and has been proposed as a roadmap candidate for the full NA CSM organization.`,
    impact: 'Won company-wide AI showcase. Reduced account prep time from hours to minutes.',
    date: '2026-05',
    featured: true,
    assets: [],
    link: undefined,
  },
  {
    id: 'ai-roadmap',
    title: '27-Tool AI Roadmap for CS Organization',
    category: 'Strategic Leadership',
    tags: ['AI Strategy', 'Executive Communication', 'Roadmap', 'Board Presentation'],
    summary:
      'Designed and presented a comprehensive 27-tool AI roadmap to executive leadership, with board-ready materials quantifying time savings, tool impact, and strategic trajectory across the full CSM lifecycle.',
    description: `A full-scope initiative to systematically map AI opportunities across the Customer Success lifecycle — from onboarding and health scoring to renewal intelligence and executive communication.

Developed board-level materials with scenario planning, ROI modeling, and a phased implementation roadmap, positioning the CS organization as a strategic AI adopter within the company.`,
    impact: 'Presented to executive leadership. Board materials included quantified ROI metrics.',
    date: '2026-05',
    featured: true,
    assets: [],
  },
  {
    id: 'enterprise-coverage-model',
    title: 'Enterprise Coverage Model & Board Planning',
    category: 'Strategic Leadership',
    tags: ['Workforce Planning', 'ARR Strategy', 'Board Presentation', 'Global Operations'],
    summary:
      'Led quarterly global CSM planning with executive stakeholders. Developed enterprise headcount and coverage models for board presentation, mapping resource strategy to ARR coverage targets.',
    description: `Worked across global CS leadership to build a ground-up model connecting headcount, customer complexity, and ARR coverage goals.

The resulting materials were presented at board level, translating operational CS data into strategic narrative that informed resourcing and growth decisions.`,
    impact: 'Delivered board-ready coverage models. Aligned global CS leadership around shared ARR targets.',
    date: '2026-04',
    featured: false,
    assets: [],
  },
  {
    id: 'coe-workshop',
    title: 'CSM Center of Excellence — Enablement Series',
    category: 'Organizational Development',
    tags: ['Enablement', 'COE', 'Capability Building', 'Leadership'],
    summary:
      'Facilitated a CS capability gap assessment and initiated a COE enablement workshop series to accelerate coverage expansion and close execution gaps across the global team.',
    description: `Identified that capability gaps — not headcount — were the primary constraint on expanding ARR coverage. Designed and launched a structured workshop series within a Center of Excellence model.

Topics covered included strategic account planning, executive engagement, and leveraging AI tools for workflow efficiency. The series was designed to be repeatable and self-sustaining.`,
    impact: 'Launched enablement series. Structured for repeatability and team-led delivery.',
    date: '2026-03',
    featured: false,
    assets: [],
  },
  {
    id: 'knowledge-base',
    title: 'Organizational Knowledge Capture Initiative',
    category: 'AI & Product Innovation',
    tags: ['Knowledge Management', 'AI', 'Institutional Memory', 'Documentation'],
    summary:
      'Proposed and designed an AI-powered organizational knowledge base built from 5+ years of CSM documents, meeting notes, and institutional knowledge — to preserve and scale team intelligence.',
    description: `Institutional knowledge walking out the door when people leave is one of the most underestimated risks in CS organizations. This initiative proposed a structured knowledge capture system, augmented by AI indexing, to turn years of CS conversations, playbooks, and decisions into a searchable, scalable resource.

The design connects to emerging AI tooling to make knowledge retrieval conversational and low-friction for the team.`,
    impact: 'Proposed to leadership. Designed for immediate implementation with existing tooling.',
    date: '2026-05',
    featured: false,
    assets: [],
  },
]
