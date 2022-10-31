import 'styles/globals.css'
import localFont from '@next/font/local';

const myFont = localFont({ src: './press-start-2p.woff2' });

import DonTelmoLogo from '@/ui/DonTelmoLogo/DonTelmoLogo'

import styles from './styles.module.css'

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" className={myFont.className}>
      <body>
        {/* <SideMenu />
        <Clock /> */}

        <div className={styles.header}>
          <DonTelmoLogo />
        </div>
        {/* <main>{children}</main> */}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
