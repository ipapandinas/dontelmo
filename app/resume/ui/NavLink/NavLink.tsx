'use client'

import React from 'react'
import { Link } from 'react-scroll'

import styles from './styles.module.css'

const NavLink = ({ label, to }: { label: string; to: string }) => (
  <Link
    className={styles.anchor}
    to={to}
    key={`link-${to}`}
    duration={500}
    offset={-20}
    smooth
    spy
  >
    {label}
  </Link>
)
export default NavLink
