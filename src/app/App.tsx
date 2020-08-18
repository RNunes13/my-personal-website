
import React from 'react';
import './App.scss';

import { Sidebar, Header } from '../components';

function App() {
  const [sidebarIsOpen, setSidebarIsOpen] = React.useState<boolean>(false);

  return (
    <main className="rn-app">
      <Sidebar isOpen={ sidebarIsOpen } />
      <div className="rn-app__content">
        <Header
          sidebarIsOpen={ sidebarIsOpen }
          handleSidebar={ setSidebarIsOpen }
        />
      </div>
    </main>
  );
}

export default App;
