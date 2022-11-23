import React, { lazy } from 'react'

export const Close = lazy(() => import('./system/close.svg'))
export const Menu = lazy(() => import('./system/menu.svg'))
export const Location = lazy(() => import('./system/location.svg'))
export const Mail = lazy(() => import('./system/mail.svg'))
export const Phone = lazy(() => import('./system/phone.svg'))
export const Up = lazy(() => import('./system/up.svg'))

export const IconsSystem = {
  close: <Close />,
  location: <Location />,
  menu: <Menu />,
  mail: <Mail />,
  phone: <Phone />,
  up: <Up />,
}

export default IconsSystem
