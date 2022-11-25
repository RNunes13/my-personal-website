import styled from '@emotion/styled'
import { Link as LinkComp } from 'components/Link/Link'
import { bodySmallBold, resetLink, resetList } from 'styles/mixins'

export const Links = styled.ul`
  ${resetList()}
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const Label = styled.span`
  ${bodySmallBold()}
`

export const Link = styled(LinkComp)`
  ${resetLink()}
  ${bodySmallBold()}
  transition: color 250ms ${({ theme }) => theme.transitions.accelerate};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    text-shadow: 0 0 1px ${({ theme }) => theme.colors.accent};
  }
`
