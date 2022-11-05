'use client'

import React from 'react'
import { Element } from 'react-scroll'

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
  <Element
    className={styles.root}
    name={`section-${anchor}`}
    key={`section-${anchor}`}
  >
    {title && <h3 className={styles.title}>{title}</h3>}
    {children}
  </Element>
)
export default Section
