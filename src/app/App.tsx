
import React from 'react';
import classnames from 'classnames';
import { ReactComponent as ArrowIcon } from '../assets/icons/up-arrow.svg';
import './App.scss';

import {
  Header,
  Sidebar,
  HomeAbout,
  HomeIntroduce,
} from '../components';

function App() {
  const [sidebarIsOpen, setSidebarIsOpen] = React.useState<boolean>(false);
  const [showBackTop, setShowBackTop] = React.useState<boolean>(false);

  React.useEffect(() => {
    window.document.addEventListener('scroll', onScroll);

    return () => window.document.removeEventListener('scroll', onScroll);
  }, []);

  function onScroll() {
    if (window.pageYOffset >= (window.innerHeight * 0.9)) setShowBackTop(true);
    else setShowBackTop(false);
  }

  function backToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <main className="rn-app">
      <Sidebar isOpen={ sidebarIsOpen } />
      <Header
        sidebarIsOpen={ sidebarIsOpen }
        handleSidebar={ setSidebarIsOpen }
      />
      <div className="rn-app__content">
        <button className={classnames('backTop', { 'is--hidden': !showBackTop})} onClick={ backToTop }>
          <ArrowIcon />
        </button>
        <HomeIntroduce />
        <HomeAbout />
      </div>
    </main>
  );
}

export default App;
