import styled from '@emotion/styled'
import NextImage from 'next/future/image'

export const LogoContainer = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spaces.space4};
`

export const Logo = styled(NextImage)`
  max-width: 60px;
`
