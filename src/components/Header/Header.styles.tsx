import styled from '@emotion/styled'
import Image from 'next/future/image'
import { isDesktop, resetButton } from 'styles/mixins'
import { Container as ContainerComp, Icon as IcomComp } from 'components'

export const HEADER_HEIGHT = 60

export const Header = styled.header<{ fill: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${HEADER_HEIGHT}px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  color: ${({ theme }) => theme.colors.base_0};
  background-color: transparent;
  transition-property: transform, background;
  transition-duration: 250ms;
  transition-timing-function: ${({ theme }) => theme.transitions.standard};
  z-index: ${({ theme }) => theme.index.top};

  ${({ theme, fill }) => !!fill && `
    background-color: ${theme.colors.primary};
  `}

  ${isDesktop()} {
    transform: translateY(-110%);
  }
`

export const Container = styled(ContainerComp)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled(Image)``

export const Menu = styled.button`
  ${resetButton()}
`

export const Icon = styled(IcomComp)`
  width: ${({ theme }) => theme.icon.small};
  height: ${({ theme }) => theme.icon.small};
`
