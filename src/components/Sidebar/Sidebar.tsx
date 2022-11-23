import React from 'react';
import { useRouter } from 'next/router'
import { Dropdown } from "components";
import type { DropdownItemType } from "components";

import { Logo, SectionLinks, ContactLinks } from './parts'

import * as Styled from './Sidebar.styles'

export interface SidebarLink {
  label: string;
}

interface SidebarProps {
  isOpen: boolean;
  t: (key: string) => string;
}

export const Sidebar: React.FC<SidebarProps> = ({ t, isOpen }) => {
  const { locale, push, pathname, asPath } = useRouter()

  const handleLocale = (nextLocale: string) => () => (
    push(
      pathname,
      asPath,
      { locale: nextLocale },
    )
  )

  const locales: DropdownItemType[] = [
    {
      id: 'pt-BR',
      label: t('sidebar.languages.pt'),
      startIcon: 'locale:brazil',
      onClick: handleLocale('pt-BR')
    },
    {
      id: 'en',
      label: t('sidebar.languages.en'),
      startIcon: 'locale:usa',
      onClick: handleLocale('en')
    },
  ];

  const activeLanguage = locales.find(({ id }) => id === locale);

  return (
    <Styled.Sidebar isOpen={isOpen}>
      <Styled.Container>
        <Logo />
        <SectionLinks t={t} />
        <Styled.InfoWrap>
          <ContactLinks t={t} />
          <Styled.Social />
          <Dropdown active={activeLanguage} options={locales} />
        </Styled.InfoWrap>
      </Styled.Container>
    </Styled.Sidebar>
  );
}

export default Sidebar;
