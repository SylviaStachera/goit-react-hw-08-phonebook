import { deleteContact } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';

import css from './ContactItem.module.css';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <>
      <span>{contact.name}</span>
      <span>: {contact.phone}</span>
      <button
        className={css['btn-delete']}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </>
  );
};

export default ContactItem;
