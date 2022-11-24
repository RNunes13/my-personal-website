import React from 'react'
import * as Styled from './DropdownItem.styles'

export type IconType = {
  icon: string
  color?: string
  height?: number
  width?: number
}

export interface DropdownItemProps {
  label: string
  className?: string
  disabled?: boolean
  startIcon?: string | IconType
  endIcon?: string | IconType
  onClick?: () => void
}

export const getIconProps = (iconProp: string | IconType) => {
  if (typeof iconProp === 'string') return { icon: iconProp, fill: 'base_0' }

  const { icon, color, height, width } = iconProp

  return { icon, height, width, fill: color ?? 'base_0' }
}

export const DropdownItem: React.FC<DropdownItemProps> = ({
  label,
  startIcon,
  endIcon,
  disabled,
  className,
  onClick,
}) => (
  <Styled.Item
    className={className}
    disabled={disabled}
    onClick={onClick}
    data-testid="dropdownItem"
  >
    {!!startIcon && <Styled.Icon {...getIconProps(startIcon)} />}
    <Styled.Label>{label}</Styled.Label>
    {!!endIcon && <Styled.Icon {...getIconProps(endIcon)} />}
  </Styled.Item>
)
