'use client'

import React, { useEffect, useState } from 'react'

import styles from './styles.module.css'

export default function Clock() {
  const [mounted, setMounted] = useState(false)
  const [clock, setClock] = useState(new Date())

  useEffect(() => {
    setInterval(() => setClock(new Date()), 1000)
  }, [setClock])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <aside className={styles.root}>
      <div className={styles.clock}>
        {clock.toLocaleTimeString(undefined, { timeStyle: 'short' })}
      </div>
    </aside>
  )
}
