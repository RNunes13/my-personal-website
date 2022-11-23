import styled from '@emotion/styled'
import { bodySmallBold } from 'styles/mixins'
import { newShade } from 'utils/helpers'
import { Icon as IconComp } from 'components'

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 5px;
  gap: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radius};
  color: ${({ theme }) => theme.colors.base_0};
  background-color: ${({ theme }) => newShade(theme.colors.primary, 20)};
  transition: background-color 200ms ${({ theme }) => theme.transitions.decelerate};

  &:hover {
    background-color: ${({ theme }) => newShade(theme.colors.primary, 40)};
  }
`

export const Icon = styled(IconComp)`
  flex: 0 0 auto;
`

export const Label = styled.span`
  ${bodySmallBold()}
  flex: 1 1 auto;
`
