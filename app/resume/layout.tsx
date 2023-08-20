import { Inter } from 'next/font/google'

import './resume.globals.css'

import BackLink from './ui/BackLink/BackLink'

import styles from './styles.module.css'
import NavLink from './ui/NavLink/NavLink'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayoutResume({ children }: { children: any }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <main className={styles.layout}>
          <div className={styles.navigation}>
            <BackLink />
            <div className={styles.tableContents}>
              <div className={styles.tableContentsLabel}>Contents</div>
              <ul className={styles.links}>
                <li>
                  <NavLink label="Technical skills" to="section-skills" />
                </li>
                <li>
                  <NavLink label="Experience" to="section-experience" />
                </li>
                <li>
                  <NavLink label="Projects" to="section-projects" />
                </li>
                <li>
                  <NavLink label="Education" to="section-education" />
                </li>
                <li>
                  <NavLink label="Languages" to="section-languages" />
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
