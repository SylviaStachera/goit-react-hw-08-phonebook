import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  ButtonGroup,
} from '@chakra-ui/react';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <FormControl
      className={css.form}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <FormLabel className={css.label}>Email</FormLabel>
      <Input size="sm" type="email" name="email" />
      <FormLabel className={css.label}>Password</FormLabel>
      <Input size="sm" type="password" name="password" />

      <ButtonGroup
        className={css.space}
        type="submit"
        size="sm"
        variant="outline"
        spacing="6"
      >
        <Button colorScheme="blue">LogIn</Button>
      </ButtonGroup>
    </FormControl>
  );
};
