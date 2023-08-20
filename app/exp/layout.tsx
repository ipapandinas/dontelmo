import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'

import '@/styles/globals.css'
import '@/styles/fonts.css'
import './exp.globals.css'

import Clock from '@/ui/Clock/Clock'
import DonTelmoLogo from '@/ui/DonTelmoLogo/DonTelmoLogo'
import Footer from '@/ui/Footer/Footer'
import SideMenu from '@/ui/SideMenu/SideMenu'
import SlickSlider from '@/ui/SlickSlider/SlickSlider'

import styles from './styles.module.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'DON TELMO WEB INVASION EXP.',
  description:
    "Hi! I'm Igor Papandinas, welcome to my personal website. I'm a blockchain engineer and manager for fullstack projects.",
  themeColor: '#fdd600',
  appleWebApp: {
    capable: true,
    title: 'DON TELMO WEB INVASION EXP.',
    statusBarStyle: 'black-translucent',
  },
  formatDetection: { telephone: false },
  openGraph: {
    type: 'website',
    url: '/exp',
    title: 'DON TELMO WEB INVASION EXP.',
    description:
      "Hi! I'm Igor Papandinas, welcome to my personal website. I'm a blockchain engineer and manager for fullstack projects.",
    siteName: 'DON TELMO WEB INVASION EXP.',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    title: 'DON TELMO WEB INVASION EXP.',
    description:
      "Hi! I'm Igor Papandinas, welcome to my personal website. I'm a blockchain engineer and manager for fullstack projects.",
    card: 'summary_large_image',
    site: '@dontelmo_',
    creator: '@dontelmo_',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <body>
        <SideMenu />
        <Clock />

        <div className={styles.header}>
          <Link href="/exp" title="Homepage" className={styles.homeLink}>
            <DonTelmoLogo />
          </Link>
          <SlickSlider />
        </div>
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
