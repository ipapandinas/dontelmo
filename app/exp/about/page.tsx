import type { Metadata } from 'next'

import Image from 'next/image'

import styles from './styles.module.css'

export const metadata: Metadata = {
  title: 'ABOUT | DON TELMO',
}

export default function Page() {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>hi,</h1>
      <p className={styles.description}>
        I&apos;m a blockchain engineer and manager for fullstack projects.
        <br />
        <br />
        this is my current DOM:
      </p>
      <div className={styles.dom}>
        <p className={styles.block}>{'<ipapandinas>'}</p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Image
              alt="Hand emoji"
              src="/assets/svgs/hand.svg"
              width={20}
              height={20}
            />{' '}
            Astar blockchain core team member
          </li>
          <li className={styles.listItem}>
            <span className={styles.polkadotEmoji} /> Polkadot Blockchain
            Academy Alumni
          </li>
          <li className={styles.listItem}>
            <Image
              alt="Bird emoji"
              src="/assets/svgs/bird.svg"
              width={20}
              height={20}
            />{' '}
            follow me on{' '}
            <a
              className={styles.link}
              href="https://twitter.com/dontelmo_"
              title="Twitter Profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          <li className={styles.listItem}>
            <Image
              alt="Dolls emoji"
              src="/assets/svgs/dolls.svg"
              width={20}
              height={20}
            />{' '}
            I’m looking to collaborate, reach me on{' '}
            <a
              className={styles.link}
              href="https://www.linkedin.com/in/igor-papandinas/"
              title="LinkedIn Profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li className={styles.listItem}>
            <Image
              alt="Pasta emoji"
              src="/assets/svgs/pasta.svg"
              width={20}
              height={20}
            />{' '}
            pasta purist
          </li>
        </ul>
        <p className={styles.block}>{'</ipapandinas>'}</p>
      </div>
    </div>
  )
}
