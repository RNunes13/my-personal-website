import React, { Suspense } from 'react'

import { IconsLocale } from './helpers/icons-locale'
import { IconsSocial } from './helpers/icons-social'
import { IconsSystem } from './helpers/icons-system'

import { Wrapper } from './Icon.styles'

export const iconsLibraries: Record<string, any> = {
  locale: IconsLocale,
  social: IconsSocial,
  system: IconsSystem,
}

export interface IIconProps extends React.HTMLProps<HTMLElement> {
  className?: string
  icon?: string
  fill?: string
  height?: number
  width?: number
}

export const Icon: React.FC<IIconProps> = ({ icon, ...rest }) => {
  if (!icon) return <Wrapper {...(rest as any)} />

  const [library, iconName]: string[] = icon.split(':')

  if (!library || !iconName) return <Wrapper {...(rest as any)} />

  const selectedLib = iconsLibraries[library]
  const iconComponent = selectedLib && selectedLib[iconName]

  return (
    <Suspense fallback={<Wrapper />}>
      <Wrapper {...(rest as any)} data-testid={icon}>
        {iconComponent}
      </Wrapper>
    </Suspense>
  )
}

export default Icon

const reduceIcons = (accum: any, [key, value]: [key: string, value: any]) => {
  if (typeof value !== 'string') {
    Object.keys(value).map((name) => accum.push(`${key}:${name}`))
  }

  return accum
}

export const iconsAsList = Object.entries(iconsLibraries).reduce(
  reduceIcons,
  [],
)
