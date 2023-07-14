import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';

export const Layout = ({ children }) => {
  return (
    <div className={css.container}>
      <Suspense fallback="{<div>Loading...</div>}">
        <Outlet />
      </Suspense>
    </div>
  );
};
