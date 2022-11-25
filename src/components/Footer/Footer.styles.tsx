import styled from '@emotion/styled'
import NextImage from 'next/image'
import FutureImage from 'next/future/image'
import { getRgbFromHex } from 'utils/helpers'
import { caption, isMobile } from 'styles/mixins'
import { SocialMedia, Container as ContainerComp } from 'components'

export const Footer = styled.footer`
  position: relative;
  color: ${({ theme }) => theme.colors.base_0};
  padding-top: ${({ theme }) => theme.spaces.space3};
  padding-bottom: ${({ theme }) => theme.spaces.space3};
  grid-area: footer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: rgba(
      ${({ theme }) => getRgbFromHex(theme.colors.primary).join(',')},
      0.7
    );
  }
`

export const BackgroundImage = styled(NextImage)`
  z-index: 0;
`

export const Container = styled(ContainerComp)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spaces.space2};
  z-index: 1;

  ${isMobile()} {
    flex-direction: column;
  }
`

export const Copyright = styled.p`
  ${caption()}
  flex: 0 1 33%;

  ${isMobile()} {
    order: 1;
    text-align: center;
  }
`

export const Logo = styled(FutureImage)`
  flex: 0 1 50px;

  ${isMobile()} {
    order: -1;
  }
`

export const Social = styled(SocialMedia)`
  flex: 0 1 33%;
  justify-content: flex-end;
`
