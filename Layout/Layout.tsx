import React from 'react'

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

export default function Layout({ children }:  any) {
    return (
      <div className="flex bg-white-100">
        <Sidebar />
        <div
          className="flex flex-grow flex-col min-h-screen"
          style={{
            width: 'calc(100% - 295px)'
          }}
        >
          <Header  />
          <main>{children}</main>
        </div>
       
      </div>
    )
  }
