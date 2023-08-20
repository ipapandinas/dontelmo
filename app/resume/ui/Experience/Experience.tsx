import React, { Fragment } from 'react'

import styles from './styles.module.css'

const Experience = ({
  children,
  link,
  subtitle: rawSubtitle,
  title,
}: {
  children?: any
  link?: string
  subtitle: string
  title: string
}) => {
  const subtitle = rawSubtitle.split('*')

  const Reference = link ? 'a' : Fragment
  const ReferenceProps = link
    ? {
        className: styles.link,
        href: link,
        title,
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {}

  return (
    <div className={styles.root}>
      {title && <div className={styles.title}>{title}</div>}
      {subtitle && (
        <div className={styles.subtitle}>
          <Reference {...ReferenceProps}>{subtitle[0]}</Reference>
          <span>{subtitle[1]}</span>
        </div>
      )}
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export default Experience
