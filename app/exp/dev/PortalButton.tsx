'use client'

import React, { useRef, useState } from 'react'

import MorphPortal from './MorphPortal'
import styles from './styles.module.css'

const PortalButton = () => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [isPortalOpen, setPortalOpen] = useState(false)

  const handleClick = () => {
    setPortalOpen(true)
  }

  return (
    <>
      <button
        className={styles.button}
        onClick={handleClick}
        ref={buttonRef}
        title="Igor Papandinas's resume"
      >
        Resume
      </button>
      {isPortalOpen && buttonRef?.current && (
        <MorphPortal
          destination="/resume"
          top={buttonRef.current.getBoundingClientRect().top}
          left={buttonRef.current.getBoundingClientRect().left}
        />
      )}
    </>
  )
}

export default PortalButton
