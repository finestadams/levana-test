import React, { createContext, useState } from 'react';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export const ValueContext = createContext('');

export default function Layout({ children }: any) {
  const [searchValue, setSearchValue] = useState('');

  return (
    <ValueContext.Provider value={searchValue}>
      <div className="flex bg-white-100">
        <Sidebar searchValue={searchValue} setSearchValue={setSearchValue} />
        <div
          className="flex flex-grow flex-col min-h-screen"
          style={{
            width: 'calc(100% - 295px)'
          }}
        >
          <Header />
          <main>{children}</main>
        </div>
      </div>
    </ValueContext.Provider>
  );
}
