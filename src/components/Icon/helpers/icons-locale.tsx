import React, { lazy } from 'react'

export const Brazil = lazy(() => import('./locale/brazil.svg'))
export const Usa = lazy(() => import('./locale/usa.svg'))

export const IconsLocale = {
  brazil: <Brazil />,
  usa: <Usa />,
}

export default IconsLocale
