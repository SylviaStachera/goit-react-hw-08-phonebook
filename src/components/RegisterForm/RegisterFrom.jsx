import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  ButtonGroup,
} from '@chakra-ui/react';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(
      register({
        name: name,
        email: email,
        password: password,
      })
    );
  };

  return (
    <FormControl
      className={css.form}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <FormLabel className={css.label}>Username</FormLabel>
      <Input size="sm" type="text" name="name" />
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
        <Button colorScheme="blue">Register</Button>
      </ButtonGroup>
    </FormControl>
  );
};
