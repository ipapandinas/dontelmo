import React from 'react'

import styles from './styles.module.css'

const Tag = ({ name, version }: { name: string; version?: string }) => (
  <div className={styles.root}>
    <div className={styles.name}>{name}</div>
    {version && <div className={styles.version}>{version}</div>}
  </div>
)
export default Tag
