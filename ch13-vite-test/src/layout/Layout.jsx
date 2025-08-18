import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header
        style={{ background: 'lightgray', padding: '16px', fontSize: '24px' }}
      >
        Header 영역
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
