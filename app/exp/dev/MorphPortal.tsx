'use client'

import React, { useEffect } from 'react'
import anime from 'animejs'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import styles from './styles.module.css'

interface Props {
  destination: string
  top: number
  left: number
}

const MorphPortal = ({ destination, top, left }: Props) => {
  const router = useRouter()

  useEffect(() => {
    const main = document.querySelector('main')
    if (main) main.style.zIndex = '1000'

    const timeline = anime.timeline({
      duration: 7000,
      easing: 'easeOutCubic',
    })

    timeline.add({
      targets: '#morph',
      scale: `${window.innerHeight / 10}`,
      left: [`${left}px`, `${left / 2}px`],
      top: [`${top}px`, `${top / 2}px`],
    })

    setTimeout(() => {
      router.push(destination)
      router.refresh()
    }, 1000)
  }, [destination, left, router, top])

  return (
    <Image
      alt="boudin"
      className={styles.boudin}
      src="/assets/svgs/morph.svg"
      id="morph"
      width={100}
      height={50}
      style={{ position: 'absolute', top, left }}
    />
  )
}

export default MorphPortal
