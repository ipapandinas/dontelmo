import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import DonTelmoLogo from '@/ui/DonTelmoLogo/DonTelmoLogo'

import styles from './styles.module.css'

const BackLink = () => (
  <div>
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
