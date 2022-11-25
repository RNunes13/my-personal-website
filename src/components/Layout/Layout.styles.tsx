import styled from '@emotion/styled'

import { WIDTH as SidebarWidth } from 'components/Sidebar/Sidebar.styles'
import { HEADER_HEIGHT } from 'components/Header/Header.styles'
import { isDesktop } from 'styles/mixins'

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: ${HEADER_HEIGHT}px 1fr minmax(110px, max-content);
  justify-items: stretch;
  height: 100%;
  grid-template-areas:
    'header'
    'main'
    'footer';

  ${isDesktop()} {
    grid-template-columns: ${SidebarWidth}px 1fr;
    grid-template-rows: 1fr minmax(110px, max-content);
    grid-template-areas:
      'sidebar main'
      'sidebar footer';
  }
`

export const Main = styled.main`
  grid-area: main;
`
