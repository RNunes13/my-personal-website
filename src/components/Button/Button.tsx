import { FC, ReactNode } from 'react'
import { IColorsProps } from 'styles/theme/Theme'
import { Button as ButtonStyled } from './Button.styles'

type ColorType = keyof IColorsProps

interface ButtonProps {
  color?: ColorType
  disabled?: boolean
  className?: string
  ariaLabel?: string
  children: ReactNode
  onClick?(): void
}

export const Button: FC<ButtonProps> = ({
  disabled,
  className,
  color = 'primary',
  ariaLabel = 'Button',
  children,
  onClick,
}) => {
  if (!children) return null

  return (
    <ButtonStyled
      type="button"
      color={color as string}
      disabled={disabled}
      className={className}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </ButtonStyled>
  )
}

export default Button
