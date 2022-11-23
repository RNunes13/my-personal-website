import { css } from '@emotion/react'
import { theme } from 'styles/theme/Theme'
import { newShade } from 'utils/helpers'

export const resetButton = () => css`
  overflow: visible;
  margin: 0;
  padding: 0;
  border: 0;
  background: transparent;
  font: inherit;
  line-height: normal;
  cursor: pointer;
  -moz-user-select: text;
`

export const resetList = () => css`
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  list-style: none;
`

export const resetLink = () => css`
  text-decoration: inherit;
  color: inherit;
  &:hover {
    cursor: pointer;
  }
`

export const scrollbar = ({
  size = 8,
  primary = newShade(theme.colors.primary, 90),
  secondary = 'transparent'
} = {}) => css`
  &::-webkit-scrollbar {
    width: ${size}px;
    height: ${size}px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${primary};
    border-radius: 5px;

    &:hover {
      background: ${primary};
    }
  }

  &::-webkit-scrollbar-track {
    background: ${secondary};
  }
`
