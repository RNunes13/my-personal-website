
import React from 'react';
import classnames from 'classnames';
import i18n from '../i18n';
import { SidebarLink } from '../components/Sidebar/Sidebar';
import { OptionsType } from '../components/Notifier/Notifier';
import { withNamespaces, WithNamespaces } from 'react-i18next';
import { ReactComponent as SmileIcon } from '../assets/icons/smile.svg';
import { ReactComponent as ArrowIcon } from '../assets/icons/up-arrow.svg';
import './App.scss';

import {
  Header,
  Footer,
  Sidebar,
  Overlay,
  Notifier,
  HomeAbout,
  HomeContact,
  HomeIntroduce,
} from '../components';

export type AppLanguageType = 'pt-BR' | 'en-US';

interface IAppContent {
  handleNotifier(opt: OptionsType): void;
}

interface AppProps extends WithNamespaces {
  t?: any;
}

export const AppContext = React.createContext<Partial<IAppContent>>({});

function App({ t }: AppProps) {
  React.useEffect(() => {
    window.document.addEventListener('scroll', onScroll);

    welcomeMessage();

    return () => window.document.removeEventListener('scroll', onScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
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

  function welcomeMessage() {
    const storageKey = '@RNunes:welcomeMessage';
    const welcomeMessage = `<p>${t('notifier.welcome.paragraphs.one')}</p><br/><p>${t('notifier.welcome.paragraphs.two')}</p>`;

    const onCloseWelcomeMessage = () => {
      window.localStorage.setItem(storageKey, 'true');
      
      setNotifier({
        open: false,
        onClose: undefined,
        customIcon: undefined,
        customTitle: undefined,
        message: welcomeMessage,
      })
    };

    const alreadyBeenShown = window.localStorage.getItem(storageKey) === 'true';

    if (!alreadyBeenShown) {
      setTimeout(() =>
        setNotifier({
          open: true,
          variant: 'success',
          customIcon: SmileIcon,
          message: welcomeMessage,
          customTitle: t('notifier.welcome.title'),
          onClose: onCloseWelcomeMessage,
        })
      , 500);
    }
  }

  return (
    <AppContext.Provider value={{ handleNotifier }} >
      <main className="rn-app">
        <Notifier { ...notifier } open={ notifier.open && !!notifier.message } />
        <Overlay
          show={ sidebarIsOpen }
          onClose={ () => setSidebarIsOpen(false) }
        />
        <Sidebar
          links={ sidebarLinks }
          isOpen={ sidebarIsOpen }
          handleLanguage={ changeLanguage }
        />
        <Header
          sidebarIsOpen={ sidebarIsOpen }
          handleSidebar={ setSidebarIsOpen }
        />
        <div className="rn-app__content">
          <button className={classnames('backTop', { 'is--hidden': !showBackTop})} onClick={ backToTop } aria-label="Back top">
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

export default withNamespaces()(App);
