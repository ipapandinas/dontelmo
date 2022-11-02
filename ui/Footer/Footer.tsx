import Link from 'next/link'
import React from 'react'

import styles from './styles.module.css'

export default function Footer() {
  return (
    <footer className={styles.root}>
      <Link
        className={styles.tag}
        href="/"
        title="Don Telmo website"
        rel="noopener noreferrer"
      >
        © {new Date().getFullYear()} DON TELMO
      </Link>
      <div className={styles.socials}>
        <a
          href="https://twitter.com/dontelmo_"
          title="DON TELMO's Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`${styles.icon} ${styles.twitter}`} />
        </a>
        <a
          href="https://www.linkedin.com/in/igor-papandinas/"
          title="DON TELMO's LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`${styles.icon} ${styles.linkedin}`} />
        </a>
        <a
          href="https://github.com/ipapandinas"
          title="DON TELMO's Github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`${styles.icon} ${styles.github}`} />
        </a>
        <a
          href="mailto:igor.papandinas@posteo.net"
          title="DON TELMO's contact"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={`${styles.icon} ${styles.mail}`} />
        </a>
      </div>
    </footer>
  )
}
