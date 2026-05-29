export interface ExperienceItem {
  id: string
  company: string
  role: string
  period: string
  location: string
  description: string
  highlights: string[]
  type: 'corporate' | 'military' | 'academic' | 'advisory'
}

export interface Project {
  id: string
  title: string
  category: string
  tags: string[]
  summary: string
  description: string
  impact?: string
  date: string
  featured: boolean
  assets?: ProjectAsset[]
  link?: string
}

export interface ProjectAsset {
  type: 'image' | 'pdf' | 'slide' | 'link' | 'video'
  url: string
  caption?: string
}

export interface Article {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: number
  tags: string[]
  slug: string
  external?: string
}

export interface PersonalItem {
  category: string
  icon: string
  items: string[]
  description?: string
}

export interface NavLink {
  label: string
  href: string
}
