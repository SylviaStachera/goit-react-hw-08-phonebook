import { useAuth } from 'hooks/useAuth';
import css from './UserMenu.module.css';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}!</p>
      <button
        type="button"
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Logout
      </button>
    </div>
  );
};
