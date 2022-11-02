import React from 'react'

import styles from './styles.module.css'

export default function FileHeader({ title }: { title: string }) {
  return (
    <div className={styles.root}>
      <div className={styles.left} />
      <div className={styles.separator}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.separator}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>
      <div className={styles.right} />
    </div>
  )
}
