import styled from '@emotion/styled'
import NextLink from 'next/link'

export const List = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spaces.space1};
`

export const Item = styled.li``

export const Link = styled(NextLink)``
