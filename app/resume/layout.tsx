import '@/styles/fonts.css'
import './resume.globals.css'
import localFont from '@next/font/local'

const myFont = localFont({ src: './sf-pro-display-regular.woff2' })

import DonTelmoLogo from '@/ui/DonTelmoLogo/DonTelmoLogo'

import styles from './styles.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function RootLayoutResume({ children }: { children: any }) {
  const NavLink = ({ label, to }: { label: string; to: string }) => (
    <Link className={styles.anchor} href={to} key={`link-${to}`}>
      {label}
    </Link>
  )

  return (
    <html lang="en" className={myFont.className}>
      <body>
        <main className={styles.layout}>
          <div className={styles.navigation}>
            <Link href="/exp" title="Back to DON TELMO's WEB INVASION EXP.">
              <DonTelmoLogo isPath={false} />
              <div className={styles.backWrapper}>
                <Image
                  alt="Back arrow"
                  height={40}
                  width={40}
                  priority
                  src="/assets/svgs/back.svg"
                  title="Back to DON TELMO's WEB INVASION EXP."
                />
                <div className={styles.backLabel}>BACK</div>
              </div>
            </Link>
            <div className={styles.tableContents}>
              <div className={styles.tableContentsLabel}>Contents</div>
              <ul className={styles.links}>
                <li>
                  <NavLink label="Technical skills" to="/resume/#skills" />
                </li>
                <li>
                  <NavLink label="Experience" to="/resume/#experience" />
                </li>
                <li>
                  <NavLink label="Education" to="/resume/#education" />
                </li>
                <li>
                  <NavLink label="Languages" to="/resume/#languages" />
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.content}>{children}</div>
        </main>
      </body>
    </html>
  )
}
