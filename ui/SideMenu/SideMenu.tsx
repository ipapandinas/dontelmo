import React from 'react'
import Link from 'next/link'

import { NAV_MENU } from 'lib/constants'

import styles from './styles.module.css'

export default function SideMenu() {
  return (
    <aside className={styles.root}>
      {NAV_MENU.map(({ href, label, title }) => (
        <Link
          key={href}
          className={styles.button}
          href={href}
          title={title}
          rel="noopener noreferrer"
        >
          {label}
        </Link>
      ))}
    </aside>
  )
}
