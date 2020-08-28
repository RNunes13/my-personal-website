
import React from 'react';
import classnames from 'classnames';
import i18n from '../i18n';
import { SidebarLink } from '../components/Sidebar/Sidebar';
import { OptionsType } from '../components/Notifier/Notifier';
import { ReactComponent as ArrowIcon } from '../assets/icons/up-arrow.svg';
import './App.scss';

import {
  Header,
  Sidebar,
  Notifier,
  HomeAbout,
  HomeContact,
  HomeIntroduce,
  Footer,
} from '../components';

export type AppLanguageType = 'pt' | 'en';

interface IAppContent {
  handleNotifier(opt: OptionsType): void;
}

export const AppContext = React.createContext<Partial<IAppContent>>({});

function App() {
  React.useEffect(() => {
    window.document.addEventListener('scroll', onScroll);

    return () => window.document.removeEventListener('scroll', onScroll);
  }, []);

  const [sidebarIsOpen, setSidebarIsOpen] = React.useState<boolean>(false);
  const [showBackTop, setShowBackTop] = React.useState<boolean>(false);
  const [notifier, setNotifier] = React.useState<OptionsType>({ open: false });

  const aboutRef = React.createRef<HTMLDivElement>();
  const contactRef = React.createRef<HTMLDivElement>();

  const changeLanguage = (lng: AppLanguageType) => i18n.changeLanguage(lng);

  const sidebarLinks: SidebarLink[] = [
    { label: 'sidebar.menu.home', onClick: () => { navigateToSession() } },
    { label: 'sidebar.menu.about', onClick: () => { navigateToSession(aboutRef) } },
    { label: 'sidebar.menu.contact', onClick: () => { navigateToSession(contactRef) } },
  ];

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

  function handleNotifier(opt: OptionsType) {
    setNotifier(oldState => ({ ...oldState, ...opt }));
  }

  return (
    <AppContext.Provider value={{ handleNotifier }} >
      <main className="rn-app">
        <Notifier { ...notifier } open={ notifier.open && !!notifier.message } />
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
          <HomeContact elementRef={ contactRef } />
          <Footer />
        </div>
      </main>
    </AppContext.Provider>
  );
}

export default App;
