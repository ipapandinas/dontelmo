import '@/styles/fonts.css'
import './resume.globals.css'
import Link from 'next/link'
import localFont from '@next/font/local'

const myFont = localFont({ src: './sf-pro-display-regular.woff2' })

import BackLink from './ui/BackLink/BackLink'

import styles from './styles.module.css'

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
            <BackLink />
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
