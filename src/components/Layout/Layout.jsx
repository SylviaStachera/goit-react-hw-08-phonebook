import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';

import { Spinner } from '@chakra-ui/react';
import css from './Layout.module.css';

export const Layout = ({ children }) => {
  return (
    <div className={css['gradient-background']}>
      <AppBar />
      <Suspense
        fallback={
          <Spinner
            className={css.spinner}
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};
