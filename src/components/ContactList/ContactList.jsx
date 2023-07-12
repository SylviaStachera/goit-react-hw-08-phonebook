import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import {
  selectFilteredContacts,
  selectError,
  selectLoading,
} from 'redux/selectors';

import css from './ContactList.module.css';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {loading && <p>Loading...</p>}

      {!filteredContacts?.length && !error && !loading && (
        <p>Sorry! No contacts found.</p>
      )}

      {error && <p>{error}</p>}
      <ul>
        {filteredContacts.map(contact => {
          return (
            <li className={css['list-item']} key={contact.id}>
              <ContactItem contact={contact} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
