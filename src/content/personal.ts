import type { PersonalItem } from '@/lib/types'

export const personalItems: PersonalItem[] = [
  {
    category: 'Music',
    icon: '♩',
    items: ['Classical flute', 'Studied at Hebrew University alongside International Relations'],
    description:
      'I\'ve played flute since childhood. Music is where structure meets feeling — and it\'s taught me more about patience and precision than almost anything else.',
  },
  {
    category: 'Roots',
    icon: '◈',
    items: [
      'Born and raised in Israel',
      'Living in Durham, NC for five years',
      'Bilingual: Hebrew & English, conversational in others',
    ],
    description:
      'My parents walked every trail in Israel by foot. I grew up with that same curiosity about land, people, and how places shape us.',
  },
  {
    category: 'Family',
    icon: '○',
    items: ['Mother of two', 'Met my partner in China during travels'],
    description:
      'Home is wherever my family is. Right now, that\'s Durham — a city I\'ve grown to love for its warmth and its pace.',
  },
  {
    category: 'Reading',
    icon: '□',
    items: [
      'International relations & geopolitics',
      'Leadership and organizational design',
      'Philosophy of technology',
      'Israeli literature',
    ],
    description: 'Books are how I slow down. My reading tends toward the intersection of power, systems, and what makes people collaborate — or not.',
  },
  {
    category: 'Thinking',
    icon: '◇',
    items: [
      'How institutions build (and lose) trust',
      'What makes cross-cultural partnerships last',
      'The future of human-AI collaboration in enterprise',
    ],
    description: 'The questions I keep returning to are usually about alignment — between people, between organizations, between intention and impact.',
  },
]

export const philosophy = {
  headline: 'Leadership is a service, not a status.',
  body: `I believe great CS leadership starts with radical clarity about what customers actually need — not what we want to sell them. The best partnerships I've built were grounded in honesty, even when that was harder than agreement.

My military background gave me a framework for operating in high-stakes, ambiguous environments. My academic work gave me curiosity about why things work. My CS career gave me the discipline to measure it.

I'm drawn to complexity — and I believe that complexity, held with patience and care, is where the most meaningful work happens.`,
}
