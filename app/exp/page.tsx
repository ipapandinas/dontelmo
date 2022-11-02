import Link from 'next/link'

import { NAV_MENU } from 'lib/constants'

import styles from './styles.module.css'

export default function Page() {
  return (
    <div className={styles.root}>
      <div className={styles.menu}>
        {NAV_MENU.map(({ href, label, title }) => (
          <Link
            className={styles.button}
            key={href}
            href={href}
            title={title}
            rel="noopener noreferrer"
          >
            {label}
          </Link>
        ))}
      </div>
      <div className={styles.text}>Each page presents an aspect of my work</div>
      <div className={styles.tag}>
        DON TELMO
        <br />
        WEB INVASION EXP.
      </div>
    </div>
  )
}
