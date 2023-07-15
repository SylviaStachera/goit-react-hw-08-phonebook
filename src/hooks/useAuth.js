import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
  selectError,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggenIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const error = useSelector(selectError);

  return {
    isLoggenIn,
    isRefreshing,
    user,
    error,
  };
};
