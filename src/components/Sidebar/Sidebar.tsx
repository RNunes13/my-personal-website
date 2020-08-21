/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */

import React from 'react';
import classnames from 'classnames';
import LogoWhite from '../../assets/images/logo-w.png';
import './Sidebar.scss'

// Icons
import { ReactComponent as PhoneIcon } from '../../assets/icons/phone.svg';
import { ReactComponent as MailIcon } from '../../assets/icons/mail.svg';
import { ReactComponent as LocationIcon } from '../../assets/icons/pin.svg';
import { ReactComponent as GithubIcon } from '../../assets/icons/github.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/icons/linkedin.svg';
import { ReactComponent as SkypeIcon } from '../../assets/icons/skype.svg';

export interface SidebarLink {
  label: string;
  onClick(): void;
}

interface SidebarProps {
  isOpen: boolean;
  links: SidebarLink[];
}

const Sidebar: React.FunctionComponent<SidebarProps> = ({ isOpen, links }) => {
  const contacts: { label: string, icon: React.FunctionComponent, link?: string }[] = [
    { label: '+55 11 98947-7783', icon: PhoneIcon },
    { label: 'nunesrodrigo13@outlook.com', icon: MailIcon, link: 'mailto:nunesrodrigo13@outlook.com' },
    { label: 'São Paulo, SP, Brazil', icon: LocationIcon },
  ];

  const socials: { title: string, icon: React.FunctionComponent, link: string }[] = [
    { title: 'GitHub', icon: GithubIcon, link: 'https://github.com/RNunes13' },
    { title: 'LinkedIn', icon: LinkedinIcon, link: 'https://www.linkedin.com/in/rodrigonunes13/' },
    { title: 'Start chat', icon: SkypeIcon, link: 'skype:live:nunesrodrigo13_1?chat' },
  ]

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
                  { link.label }
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
        <ul className="social-items">
          {
            socials.map(social =>
              <li key={ social.title } className="social-item">
                <a className="social-link" href={ social.link } target="_blank" title={ social.title }>
                  <social.icon />
                </a>
              </li>
            )
          }
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
