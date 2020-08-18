
import React from 'react';
import LogoWhite from '../../assets/images/logo-w.png';
import { Container } from '../index';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import './Header.scss';

interface HeaderProps {
  sidebarIsOpen: boolean;
  handleSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FunctionComponent<HeaderProps> = ({ sidebarIsOpen, handleSidebar }) => {

  const menuOnClick = (evt: React.MouseEvent) => {
    handleSidebar(open => !open);
  };

  return (
    <header className="rn-header">
      <Container className="rn-header__container">
        <a href="/">
          <img
            className="logo"
            src={ LogoWhite }
            alt="Rodrigo Nunes | Web Developer"
            title="Rodrigo Nunes | Web Developer"
          />
        </a>
        <button className="button" onClick={ menuOnClick }>
          {
            sidebarIsOpen ?
            <CloseIcon /> :
            <MenuIcon />
          }
        </button>
      </Container>
    </header>
  )
}

export default Header;
