/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */

import React from 'react';
import i18n from '../../i18n';
import classnames from 'classnames';
import LogoWhite from '../../assets/images/logo-w.png';
import { Social } from '../../components';
import { AppLanguageType } from '../../app/App';
import { withNamespaces, WithNamespaces } from 'react-i18next';
import './Sidebar.scss'

// Icons
import { ReactComponent as PhoneIcon } from '../../assets/icons/phone.svg';
import { ReactComponent as MailIcon } from '../../assets/icons/mail.svg';
import { ReactComponent as LocationIcon } from '../../assets/icons/pin.svg';
import { ReactComponent as BrFlagIcon } from '../../assets/icons/brazil-flag.svg';
import { ReactComponent as UsFlagIcon } from '../../assets/icons/usa-flag.svg';
import { ReactComponent as ArrowIcon } from '../../assets/icons/up-arrow.svg';

export interface SidebarLink {
  label: string;
  onClick(): void;
}

interface SidebarProps {
  t?: any;
  isOpen: boolean;
  links: SidebarLink[];
  handleLanguage(lng: AppLanguageType): void;
}

const Sidebar: React.FunctionComponent<SidebarProps & WithNamespaces> = ({
  t,
  links,
  isOpen,
  handleLanguage,
}) => {
  const [languageDropdownOpen, setLanguageDropdownOpen] = React.useState<boolean>(false);

  const toggleLanguageDropdown = () => setLanguageDropdownOpen(open => !open);

  const changeLanguage = (lng: AppLanguageType) => {
    toggleLanguageDropdown();
    handleLanguage(lng);
  };
  
  const contacts: { label: string, icon: React.FunctionComponent, link?: string }[] = [
    { label: '+55 11 98947-7783', icon: PhoneIcon },
    { label: 'nunesrodrigo13@outlook.com', icon: MailIcon, link: 'mailto:nunesrodrigo13@outlook.com' },
    { label: 'São Paulo, SP, Brazil', icon: LocationIcon },
  ];

  const languages: { label: string, keys: string[], icon: React.FunctionComponent, onClick: () => void }[] = [
    { label: 'sidebar.languages.pt', keys: ['pt-BR', 'pt'], icon: BrFlagIcon, onClick: () => changeLanguage('pt-BR') },
    { label: 'sidebar.languages.en', keys: ['en-US', 'en'], icon: UsFlagIcon, onClick: () => changeLanguage('en-US') },
  ];

  const activeLanguage = (languages.filter(l => l.keys.includes(i18n.language)) || [])[0];

  return (
    <aside className={classnames("rn-sidebar", { 'is--open': isOpen })}>
      <div className="rn-sidebar__top">
        <a href="/">
          <img
            className="logo"
            src={ LogoWhite }
            alt="Rodrigo Nunes | Web Developer"
            title="Rodrigo Nunes | Web Developer"
          />
        </a>
      </div>
      <div className="rn-sidebar__middle">
        <ul className="menu-items">
          {
            links.map(link =>
              <li key={ link.label } className="menu-item">
                <a
                  href="#"
                  className="menu-link"
                  onClick={e => {
                    e.preventDefault();
                    link.onClick();
                  }}
                >
                  { t(link.label) }
                </a>
              </li>
            )
          }
        </ul>
      </div>
      <div className="rn-sidebar__bottom">
        <ul className="contact-items">
          {
            contacts.map(contact =>
              <li key={ contact.label } className="contact-item">
                <contact.icon />
                {
                  contact.link ?
                  <a
                    className="contact-link"
                    href={ contact.link }
                  >
                    { contact.label }
                  </a> :
                  <span className="contact-label">{ contact.label }</span>
                }
              </li>
            )
          }
        </ul>
        <Social />
        <div className="language">
          <span
            onClick={ toggleLanguageDropdown }
            className={classnames("language__active", { 'is--open': languageDropdownOpen})}
          >
            <span>
              {
                !!activeLanguage &&
                <React.Fragment>
                  <activeLanguage.icon />
                  { t(activeLanguage.label) }
                </React.Fragment>
              }
            </span>
            <ArrowIcon />
          </span>
          <div className={classnames("language__dropdown", { 'is--open': languageDropdownOpen})}>
            <ul className="language__items">
              {
                languages
                .filter(l => !l.keys.includes(activeLanguage.keys[0]))
                .map(l =>
                  <li key={ l.keys[0] } className="language__item" onClick={ l.onClick }>
                    <l.icon />
                    { t(l.label) }
                  </li>
                )
              }
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default withNamespaces()(Sidebar);
