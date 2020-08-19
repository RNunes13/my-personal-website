
import React from 'react';
import LogoWhite from '../../assets/images/logo-w.png';
import classnames from 'classnames';
import { Container } from '../index';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import './Header.scss';

interface HeaderProps {
  sidebarIsOpen: boolean;
  handleSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FunctionComponent<HeaderProps> = ({ sidebarIsOpen, handleSidebar }) => {
  React.useEffect(() => {
    window.document.addEventListener('scroll', onScroll);

    return () => window.document.removeEventListener('scroll', onScroll);
  }, []);

  function onScroll() {
    if (window.pageYOffset >= 100) setFill(true);
    else setFill(false);
  }
  
  const [fill, setFill] = React.useState<boolean>(false);
  
  const menuOnClick = (evt: React.MouseEvent) => {
    handleSidebar(open => !open);
  };

  return (
    <header className={classnames("rn-header", { fill })}>
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
