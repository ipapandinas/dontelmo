import '@/styles/globals.css'
import '@/styles/fonts.css'
import './exp.globals.css'
import { Press_Start_2P } from '@next/font/google'

const myFont = Press_Start_2P({
  weight: '400',
})

import Clock from '@/ui/Clock/Clock'
import DonTelmoLogo from '@/ui/DonTelmoLogo/DonTelmoLogo'
import Footer from '@/ui/Footer/Footer'
import SideMenu from '@/ui/SideMenu/SideMenu'
import SlickSlider from '@/ui/SlickSlider/SlickSlider'

import styles from './styles.module.css'
import Link from 'next/link'

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" className={myFont.className}>
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
      </body>
    </html>
  )
}
