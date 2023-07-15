import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectUser,
  selectError,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggenIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const error = useSelector(selectError);

  return {
    isLoggenIn,
    user,
    error,
  };
};
