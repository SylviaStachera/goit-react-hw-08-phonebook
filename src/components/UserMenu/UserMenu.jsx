import { useAuth } from 'hooks/useAuth';
import css from './UserMenu.module.css';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Text, Button, ButtonGroup } from '@chakra-ui/react';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <Text className={css.username}>Welcome, {user.name}!</Text>

      <ButtonGroup size="sm" variant="outline" spacing="6">
        <Button
          colorScheme="blue"
          onClick={() => {
            dispatch(logOut());
          }}
        >
          Logout
        </Button>
      </ButtonGroup>
    </div>
  );
};
