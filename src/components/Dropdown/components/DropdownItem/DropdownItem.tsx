import React from 'react'
import * as Styled from './DropdownItem.styles'

export type IconType = {
  icon: string
  color?: string
  height?: number
  width?: number
}

interface DropdownItemProps {
  label: string
  startIcon?: string | IconType
  endIcon?: string | IconType
  onClick: () => void
}

export const getIconProps = (iconProp: string | IconType) => {
  if (typeof iconProp === 'string') return {
    icon: iconProp,
    fill: 'base_0',
  }

  const { icon, color, height, width } = iconProp

  return { icon, height, width, fill: color ?? 'base_0' }
}

export const DropdownItem: React.FC<DropdownItemProps> = ({
  label,
  startIcon,
  endIcon,
  onClick,
}) => (
  <Styled.Item onClick={onClick}>
    {!!startIcon && <Styled.Icon {...getIconProps(startIcon)} />}
    <Styled.Label>{label}</Styled.Label>
    {!!endIcon && <Styled.Icon {...getIconProps(endIcon)} />}
  </Styled.Item>
)
