
import React from 'react';
import './App.scss';

import { Sidebar, Header, HomeIntroduce } from '../components';

function App() {
  const [sidebarIsOpen, setSidebarIsOpen] = React.useState<boolean>(false);

  return (
    <main className="rn-app">
      <Sidebar isOpen={ sidebarIsOpen } />
      <Header
        sidebarIsOpen={ sidebarIsOpen }
        handleSidebar={ setSidebarIsOpen }
      />
      <div className="rn-app__content">
        <HomeIntroduce />
      </div>
    </main>
  );
}

export default App;
