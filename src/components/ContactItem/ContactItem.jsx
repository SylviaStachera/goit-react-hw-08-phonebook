import { deleteContact } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';

import css from './ContactItem.module.css';
import {
  Button,
  ButtonGroup,
} from '@chakra-ui/react'

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <>
      <span>{contact.name}</span>
      <span>: {contact.number}</span>

      <ButtonGroup size="sm" variant="outline" spacing="6">
        <Button
          className={css['btn-delete']}
          onClick={() => dispatch(deleteContact(contact.id))}
          colorScheme="blue"
        >
          Delete
        </Button>
      </ButtonGroup>
    </>
  );
};

export default ContactItem;
