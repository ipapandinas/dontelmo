import React from 'react'

import styles from './styles.module.css'

const Section = ({
  anchor,
  children,
  title,
}: {
  anchor: string
  children: any
  title: string
}) => (
  <div className={styles.root} id={anchor}>
    {title && <h3 className={styles.title}>{title}</h3>}
    {children}
  </div>
)
export default Section
