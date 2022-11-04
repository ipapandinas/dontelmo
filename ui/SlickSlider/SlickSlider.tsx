'use client'

import React from 'react'
import Slider from 'react-slick'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

import styles from './styles.module.css'

const SlickSlider = () => {
  const router = useRouter()
  const pathname = usePathname()
  let initialSlide = 0
  switch (pathname) {
    case '/exp/misc':
      initialSlide = 1
      break
    case '/exp/about':
      initialSlide = 2
      break
    default:
      initialSlide = 0
      break
  }

  const sliderSettings = {
    arrows: false,
    dots: true,
    focusOnSelect: true,
    initialSlide,
    slidesToShow: 1,
    touchMove: true,
  }

  if (pathname === '/exp') return null

  return (
    <div className={styles.root}>
      <Slider
        afterChange={(current) => {
          if (current === 0) router.push('/exp/dev')
          else if (current === 1) router.push('/exp/misc')
          else if (current === 2) router.push('/exp/about')
        }}
        {...sliderSettings}
      >
        <div className={styles.button}>DEV</div>
        <div className={styles.button}>MISC</div>
        <div className={styles.button}>ABOUT</div>
      </Slider>
    </div>
  )
}

export default SlickSlider
