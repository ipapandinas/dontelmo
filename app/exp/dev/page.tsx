import Image from 'next/image'
import type { Metadata } from 'next'

import { PORTFOLIO } from 'lib/constants'

import styles from './styles.module.css'
import PortalButton from './PortalButton'

export const metadata: Metadata = {
  title: 'DEV | DON TELMO',
}

export default function Page() {
  return (
    <div className={styles.root}>
      <PortalButton />
      <p className={styles.text}>
        some of the projects I worked on.
        <br />
        <br />I am always trying to balance creativity with technology.
      </p>
      <div className={styles.portfolio}>
        {PORTFOLIO.map(
          ({
            _id,
            colors,
            description,
            height,
            href,
            label,
            logo,
            prefix,
            title,
            width,
          }) => (
            <div key={_id} className={styles.project}>
              <a
                className={styles.projectAvatar}
                href={href}
                title={title}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className={styles.projectLogo}
                  alt={`${label}'s logo`}
                  src={logo}
                  width={width || 40}
                  height={height || 40}
                />
                <div className={styles.projectName}>
                  {prefix && (
                    <span className={styles.projectPrefix}>{prefix}</span>
                  )}
                  <span className={styles.projectLabel}>{label}</span>
                  <div className={styles.projectColor}>
                    {colors.map((color) => (
                      <div
                        className="color"
                        key={color}
                        style={{
                          backgroundColor: color,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </a>
              <p className={styles.projectDescription}>{description}</p>
            </div>
          ),
        )}
      </div>
    </div>
  )
}
