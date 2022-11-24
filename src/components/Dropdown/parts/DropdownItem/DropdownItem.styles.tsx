import styled from '@emotion/styled'
import { bodySmallBold } from 'styles/mixins'
import { newShade } from 'utils/helpers'
import { Icon as IconComp } from 'components'

export const Item = styled.li<{ disabled?: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 5px;
  gap: 8px;
  border-radius: ${({ theme }) => theme.radius};
  color: ${({ theme }) => theme.colors.base_0};
  background-color: ${({ theme }) => newShade(theme.colors.primary, 20)};

  transition: background-color 200ms
    ${({ theme }) => theme.transitions.decelerate};

  ${({ theme, disabled }) =>
    disabled &&
    `
    cursor: default;
    color: ${newShade(theme.colors.base_60, 90)};
  `}

  &:hover {
    background-color: ${({ theme, disabled }) =>
      !disabled && newShade(theme.colors.primary, 40)};
  }
`

export const Icon = styled(IconComp)`
  flex: 0 0 auto;
`

export const Label = styled.span`
  ${bodySmallBold()}
  flex: 1 1 auto;
`
