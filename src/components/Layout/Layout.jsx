import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import { Global } from 'styles/global';

export const Layout = () => {
  return (
    <Global>
      <div>
        <AppBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </Global>
  );
};
