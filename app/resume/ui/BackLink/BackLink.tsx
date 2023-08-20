import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Press_Start_2P } from 'next/font/google'

import DonTelmoLogo from '@/ui/DonTelmoLogo/DonTelmoLogo'

import styles from './styles.module.css'

const press_start_2p = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const BackLink = () => (
  <div className={press_start_2p.className}>
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
  </div>
)
export default BackLink
