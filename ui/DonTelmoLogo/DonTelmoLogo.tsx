'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from './styles.module.css'

const DonTelmoLogo = () => {
  const pathname = usePathname()
  return (
    <div className={styles.root}>
      <Link href="/" title="Homepage" className={styles.logo}>
        <Image
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
          <span className={styles.path}>{` ( C:\\${
            pathname?.substring(1) || '...'
          } )`}</span>
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
