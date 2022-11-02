import React from 'react'

import styles from './styles.module.css'

const TechnicalSection = ({
  children,
  title,
}: {
  children: any
  title?: string
}) => (
  <div className={styles.root}>
    {title && <div>{title}</div>}
    <div className={styles.content}>{children}</div>
  </div>
)

export default TechnicalSection
