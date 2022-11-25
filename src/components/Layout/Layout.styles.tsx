import styled from '@emotion/styled'
import { Overlay as OverlayComp } from 'components/Overlay/Overlay'
import { WIDTH as SidebarWidth } from 'components/Sidebar/Sidebar.styles'
import { isDesktop } from 'styles/mixins'

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr minmax(110px, max-content);
  justify-items: stretch;
  height: 100%;
  grid-template-areas:
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

export const Overlay = styled(OverlayComp)`
  ${isDesktop()} {
    display: none;
  }
`
