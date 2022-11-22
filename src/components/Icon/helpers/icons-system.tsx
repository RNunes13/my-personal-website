import React, { lazy } from 'react'

export const Close = lazy(() => import('./system/close.svg'))
export const Menu = lazy(() => import('./system/menu.svg'))

export const IconsSystem = {
  close: <Close />,
  menu: <Menu />,
}

export default IconsSystem
