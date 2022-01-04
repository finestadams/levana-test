import React, { createContext, useState } from 'react';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export const ValueContext = createContext<string[]>([]);

export default function Layout({ children }: any) {
  const [searchValue, setSearchValue] = useState<string>('');
  const [changeUrl, setChangeUrl] = useState<string>('');
  return (
    <ValueContext.Provider value={[searchValue, changeUrl]}>
      <div className="flex bg-white-100">
        <Sidebar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          changeUrl={changeUrl}
          setChangeUrl={setChangeUrl}
        />
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
