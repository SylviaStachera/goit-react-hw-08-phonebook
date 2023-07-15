import { useAuth } from 'hooks/useAuth';
import css from './AppBar.module.css';
import { Navigation } from 'components/Navigation/Navigation';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <p>Yes</p> : <p>No</p>}
    </header>
  );
};
