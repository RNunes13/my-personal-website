import React, {
  createContext,
  ReactElement,
  useCallback,
  useContext,
  useState,
} from 'react'

import { useTranslation } from 'next-i18next'

import { Sidebar, Header, Footer } from 'components'
import * as Styled from './Layout.styles'

export interface LayoutProps {
  dictionaries?: string[]
  children?: string | ReactElement
}

export interface LayoutContextProps {
  sidebarIsOpen: boolean
  toggleSidebar: () => void
}

export const LayoutContext = createContext<LayoutContextProps>({
  sidebarIsOpen: false,
  toggleSidebar: () => {},
})

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { t } = useTranslation('common')

  const [sidebarIsOpen, setSidebarIsOpen] = useState<boolean>(false)

  const toggleSidebar = useCallback(
    () => setSidebarIsOpen(!sidebarIsOpen),
    [sidebarIsOpen],
  )

  const context: LayoutContextProps = {
    sidebarIsOpen,
    toggleSidebar,
  }

  return (
    <LayoutContext.Provider value={context}>
      <Styled.Layout>
        <Sidebar t={t} />
        <Styled.Overlay show={sidebarIsOpen} />
        <Header />
        <Styled.Main>{children}</Styled.Main>
        <Footer t={t} />
      </Styled.Layout>
    </LayoutContext.Provider>
  )
}

export const useLayoutContext = () => {
  const context = useContext(LayoutContext)
  return context
}
