import React, { lazy } from 'react'

export const Github = lazy(() => import('./social/github.svg'))
export const Linkedin = lazy(() => import('./social/linkedin.svg'))
export const Skype = lazy(() => import('./social/skype.svg'))

export const IconsSocial = {
  github: <Github />,
  linkedin: <Linkedin />,
  skype: <Skype />,
}

export default IconsSocial
