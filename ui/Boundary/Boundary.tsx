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
    style={{ display: 'flex', flex: 1 }}
  >
    {children}
  </div>
)

export default Boundary
