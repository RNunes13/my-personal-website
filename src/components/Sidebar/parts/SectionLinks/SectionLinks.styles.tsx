import styled from '@emotion/styled'
import { Link as LinkComp } from 'components'
import { bodySmallBold, resetLink, resetList } from 'styles/mixins'

export const Container = styled.div`
  padding: ${({ theme }) => theme.spaces.space2} 15px;
`

export const Links = styled.ul`
  ${resetList()}
`

export const Item = styled.li`
  padding: 8px 0;
`

export const Link = styled(LinkComp)`
  ${resetLink()}
  ${bodySmallBold()}
  text-transform: uppercase;
  transition: color 120ms ${({ theme }) => theme.transitions.accelerate};

  a {
    color: ${({ theme }) => theme.colors.base_0};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    text-shadow: 0 0 1px ${({ theme }) => theme.colors.accent};
  }
`
