import '@/styles/globals.css'
import '@/styles/fonts.css'
import './exp.globals.css'
import localFont from '@next/font/local'

const myFont = localFont({ src: './press-start-2p.woff2' })

import Clock from '@/ui/Clock/Clock'
import DonTelmoLogo from '@/ui/DonTelmoLogo/DonTelmoLogo'
import Footer from '@/ui/Footer/Footer'
import SideMenu from '@/ui/SideMenu/SideMenu'
import SlickSlider from '@/ui/SlickSlider/SlickSlider'

import styles from './styles.module.css'

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" className={myFont.className}>
      <body>
        <SideMenu />
        <Clock />

        <div className={styles.header}>
          <DonTelmoLogo />
          <SlickSlider />
        </div>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
