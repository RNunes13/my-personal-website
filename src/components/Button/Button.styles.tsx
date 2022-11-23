import styled from '@emotion/styled'
import { ctaBold } from 'styles/mixins/Typography'

export const Button = styled.button<{ fontColor?: string }>`
  display: flex;
  align-items: center;
  padding: ${({
    theme: {
      spaces: { space1, space2 },
    },
  }) => `${space1} ${space2}`};

  ${ctaBold()};

  border: 2px solid transparent;
  border-radius: 30px;
  text-transform: none !important;
  outline: none !important;

  cursor: pointer;
  transition-property: color, border, background;
  transition-duration: $transition-duration;
  transition-timing-function: $accelerate-ease;

  ${({ theme, color = 'primary', fontColor = 'base_0', disabled }) => `
    background-color: ${disabled ? theme.colors.base_20 : theme.colors[color]};
    color: ${disabled ? theme.colors.base_40 : theme.colors[fontColor]};
    fill: ${disabled ? theme.colors.base_40 : theme.colors[fontColor]};

    &:hover {
      filter: brightness(85%);
    }
  `}

  ${({ theme, disabled }) => disabled && `
    cursor: not-allowed;
    color: ${theme.colors.base_80};
    border-color: ${theme.colors.base_60};
    background-color: ${theme.colors.base_60};

    svg {
      fill: ${theme.colors.base_80};
    }
  `}

  svg {
    margin-right: 8px;
    width: ${({ theme }) => theme.icon.small};
    height: ${({ theme }) => theme.icon.small};
    transition-property: fill;
    transition-duration: 250ms;
    transition-timing-function: ${({ theme }) => theme.transitions.accelerate};
  }
`
