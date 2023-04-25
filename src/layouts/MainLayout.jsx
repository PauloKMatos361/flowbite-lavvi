// layouts/MainLayout.js

import React from 'react';
import Sidebar from '../components/Navbar';
import Navbar from '../components/Sidebar';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout h-full bg-slate-900">
      <Sidebar />
      <div className="content flex w-full">
        <Navbar />
        <div className="px-6 py-3 w-ful h-full page-content flex flex-1">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
