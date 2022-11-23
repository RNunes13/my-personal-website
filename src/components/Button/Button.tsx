import { FC, ReactNode } from 'react'
import { IColorsProps } from 'styles/theme/Theme'
import { Button as ButtonStyled } from './Button.styles'

type ColorType = keyof IColorsProps

export interface ButtonProps {
  color?: ColorType
  fontColor?: ColorType
  disabled?: boolean
  className?: string
  ariaLabel?: string
  children?: string | ReactNode
  onClick?(): void
}

export const Button: FC<ButtonProps> = ({
  disabled,
  className,
  color = 'primary',
  fontColor = 'base_0',
  ariaLabel = 'Button',
  children,
  onClick,
}) => {
  if (!children) return null

  return (
    <ButtonStyled
      type="button"
      color={color as string}
      fontColor={fontColor as string}
      disabled={disabled}
      className={className}
      aria-label={ariaLabel}
      onClick={onClick}
      data-testid='button'
    >
      {children}
    </ButtonStyled>
  )
}

export default Button
