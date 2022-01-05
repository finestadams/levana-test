import React, { createContext, useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export const ValueContext = createContext<string[] | any[]>([]);

export default function Layout({ children }: any) {
  const [searchValue, setSearchValue] = useState('');
  const [changeUrl, setChangeUrl] = useState('');
  const [isContact, setContact] = useState([]);
  return (
    <ValueContext.Provider
      value={[searchValue, changeUrl, setContact, isContact]}
    >
      <div className="bg-white-100">
        <Header />

        <div className="flex flex-grow flex-row min-h-screen justify-center">
          <Sidebar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            changeUrl={changeUrl}
            setChangeUrl={setChangeUrl}
          />
          <main>{children}</main>
        </div>
      </div>
    </ValueContext.Provider>
  );
}
