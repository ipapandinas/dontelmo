import clsx from 'clsx'
import React from 'react'

export const Boundary = ({
  children,
  animateRerendering = true,
}: {
  children: React.ReactNode
  animateRerendering?: boolean
}) => (
  <div
    className={clsx({
      'fade-in': animateRerendering,
    })}
  >
    {children}
  </div>
)

export default Boundary
