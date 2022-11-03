'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from './styles.module.css'

const DonTelmoLogo = ({ isPath = true }: { isPath?: boolean }) => {
  const pathname = usePathname()
  return (
    <div className={styles.root}>
      <Link href="/exp" title="Homepage" className={styles.logo}>
        <Image
          className={styles.mobile}
          alt="DON TELMO's avatar"
          height={64}
          width={64}
          priority
          src="/assets/svgs/alien.svg"
          title="DON TELMO's avatar"
        />
        <Image
          className={styles.desktop}
          alt="DON TELMO's avatar"
          height={40}
          width={40}
          priority
          src="/assets/svgs/alien.svg"
          title="DON TELMO's avatar"
        />
      </Link>
      <div className={styles.pathWrapper}>
        <span className={styles.pathPrefix}>DON</span>
        <div>
          <span className={styles.telmo}>TELMO</span>
          {isPath && (
            <span className={styles.path}>{` ( C:${
              pathname?.replaceAll('/', '\\') || '...'
            } )`}</span>
          )}
        </div>
        <div className={styles.rainbow}>
          <div className="green" style={{ backgroundColor: '#62ba49' }} />
          <div className="yellow" style={{ backgroundColor: '#fdb829' }} />
          <div className="orange" style={{ backgroundColor: '#f6821f' }} />
          <div className="red" style={{ backgroundColor: '#df393d' }} />
          <div className="purple" style={{ backgroundColor: '#973d97' }} />
          <div className="lightblue" style={{ backgroundColor: '#009ddc' }} />
        </div>
      </div>
    </div>
  )
}

export default DonTelmoLogo
