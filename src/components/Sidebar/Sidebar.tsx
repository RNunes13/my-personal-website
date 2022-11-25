import React from 'react'
import { useRouter } from 'next/router'
import { Dropdown } from 'components'
import type { DropdownItemType } from 'components'

import { useLayoutContext } from 'components/Layout/Layout'
import { Logo, SectionLinks, ContactLinks } from './parts'

import * as Styled from './Sidebar.styles'

export interface SidebarLink {
  label: string
}

export interface SidebarProps {
  t: (key: string, options?: object) => string
}

export const Sidebar: React.FC<SidebarProps> = ({ t }) => {
  const { locale, push, pathname, asPath } = useRouter()

  const { sidebarIsOpen } = useLayoutContext()

  const handleLocale = (nextLocale: string) => () =>
    push(pathname, asPath, { locale: nextLocale })

  const locales: DropdownItemType[] = [
    {
      id: 'pt-BR',
      label: t('sidebar.languages.pt'),
      startIcon: 'locale:brazil',
      onClick: handleLocale('pt-BR'),
    },
    {
      id: 'en',
      label: t('sidebar.languages.en'),
      startIcon: 'locale:usa',
      onClick: handleLocale('en'),
    },
  ]

  const activeLanguage = locales.find(({ id }) => id === locale)

  return (
    <Styled.Sidebar isOpen={sidebarIsOpen}>
      <Styled.Container>
        <Logo />
        <SectionLinks t={t} />
        <Styled.InfoWrap>
          <ContactLinks t={t} />
          <Styled.Social />
          <Dropdown
            options={locales}
            active={activeLanguage}
            placeholder={t('sidebar.languages.select')}
          />
        </Styled.InfoWrap>
      </Styled.Container>
    </Styled.Sidebar>
  )
}

export default Sidebar
