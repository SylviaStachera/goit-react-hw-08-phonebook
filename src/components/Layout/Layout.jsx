import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import { AppBar } from 'components/AppBar/AppBar';

export const Layout = ({ children }) => {
  return (
    <div className={css['gradient-background']}>
      <AppBar />
      <Suspense fallback="{<div>Loading...</div>}">
        <Outlet />
      </Suspense>
    </div>
  );
};
