
import React from 'react';
import classnames from 'classnames';
import i18n from '../i18n';
import { SidebarLink } from '../components/Sidebar/Sidebar';
import { ReactComponent as ArrowIcon } from '../assets/icons/up-arrow.svg';
import './App.scss';

import {
  Header,
  Sidebar,
  HomeAbout,
  HomeIntroduce,
} from '../components';

export type AppLanguageType = 'pt' | 'en'; 

function App() {
  React.useEffect(() => {
    window.document.addEventListener('scroll', onScroll);

    return () => window.document.removeEventListener('scroll', onScroll);
  }, []);

  const [sidebarIsOpen, setSidebarIsOpen] = React.useState<boolean>(false);
  const [showBackTop, setShowBackTop] = React.useState<boolean>(false);

  const aboutRef = React.createRef<HTMLDivElement>();

  const sidebarLinks: SidebarLink[] = [
    { label: 'sidebar.menu.home', onClick: () => { navigateToSession() } },
    { label: 'sidebar.menu.about', onClick: () => { navigateToSession(aboutRef) } },
  ];

  const changeLanguage = (lng: AppLanguageType) => i18n.changeLanguage(lng);

  function onScroll() {
    if (window.pageYOffset >= (window.innerHeight * 0.9)) setShowBackTop(true);
    else setShowBackTop(false);
  }

  function backToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function navigateToSession(ref?: React.RefObject<HTMLDivElement>) {
    if (sidebarIsOpen && window.innerWidth < 992) setSidebarIsOpen(false);

    if (!ref) {
      backToTop();
      return;
    }
    
    if (ref.current) ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <main className="rn-app">
      <Sidebar isOpen={ sidebarIsOpen } links={ sidebarLinks } handleLanguage={ changeLanguage } />
      <Header
        sidebarIsOpen={ sidebarIsOpen }
        handleSidebar={ setSidebarIsOpen }
      />
      <div className="rn-app__content">
        <button className={classnames('backTop', { 'is--hidden': !showBackTop})} onClick={ backToTop }>
          <ArrowIcon />
        </button>
        <HomeIntroduce />
        <HomeAbout elementRef={ aboutRef } />
      </div>
    </main>
  );
}

export default App;
