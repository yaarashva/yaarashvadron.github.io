import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import Providers from '@/components/layout/Providers'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Yaara Shvadron — Customer Success & Enterprise Strategy',
  description:
    'Senior Customer Success & Enterprise Strategy Leader. Scaling global CS organizations, transforming operations, and driving outcomes that matter.',
  keywords: [
    'Customer Success',
    'Enterprise Strategy',
    'SaaS',
    'CS Leadership',
    'Yaara Shvadron',
  ],
  openGraph: {
    title: 'Yaara Shvadron',
    description: 'Senior Customer Success & Enterprise Strategy Leader',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yaara Shvadron',
    description: 'Senior Customer Success & Enterprise Strategy Leader',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-[var(--background)] text-[var(--foreground)]">
        <Providers>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
