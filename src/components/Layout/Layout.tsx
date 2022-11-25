import React, {
  createContext,
  ReactElement,
  useCallback,
  useContext,
  useState,
} from 'react'

import { useTranslation } from 'next-i18next'

import { Sidebar, Header, Footer, Container } from 'components'
import * as Styled from './Layout.styles'

export interface LayoutProps {
  dictionaries?: string[]
  children?: string | ReactElement
}

export interface LayoutContextProps {
  sidebarIsOpen: boolean
  toggleSidebar: () => void
  t: (key: string, options?: object) => string
}

export const LayoutContext = createContext<LayoutContextProps>({
  sidebarIsOpen: false,
  t: () => '',
  toggleSidebar: () => {},
})

export const Layout: React.FC<LayoutProps> = ({ children, dictionaries }) => {
  const { t } = useTranslation(dictionaries)

  const [sidebarIsOpen, setSidebarIsOpen] = useState<boolean>(false)

  const toggleSidebar = useCallback(
    () => setSidebarIsOpen(!sidebarIsOpen),
    [sidebarIsOpen],
  )

  const context: LayoutContextProps = {
    t,
    sidebarIsOpen,
    toggleSidebar,
  }

  return (
    <LayoutContext.Provider value={context}>
      <Styled.Layout>
        <Sidebar />
        <Header />
        <Styled.Main>
          <Container>{children}</Container>
        </Styled.Main>
        <Footer />
      </Styled.Layout>
    </LayoutContext.Provider>
  )
}

export const useLayoutContext = () => {
  const context = useContext(LayoutContext)
  return context
}
