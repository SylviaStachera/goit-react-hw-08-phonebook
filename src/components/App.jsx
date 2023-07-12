import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import ContactItem from './ContactItem/ContactItem';
import Filter from './Filter/Filter';

// import { useState, useEffect } from 'react';

export const App = () => {
  // const [filter, setFilter] = useState('');
  // const [contacts, setContacts] = useState([]);

  // useEffect(() => {
  //   const savedContacts = localStorage.getItem('contacts');

  //   if (savedContacts) {
  //     const parsedContacts = JSON.parse(savedContacts);
  //     setContacts(parsedContacts);
  //   }
  // }, []);

  // const addContact = newContact => {
  //   const isExists = contacts.find(
  //     contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
  //   );

  //   if (isExists) {
  //     return alert(`${isExists.name} is already in contacts.`);
  //   }

  //   const updatedContacts = [...contacts, newContact];

  //   setContacts(updatedContacts);

  //   localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  // };

  // const getContacts = (contacts, filter) => {
  //   const normalizeName = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizeName)
  //   );
  // };

  // const changeFilter = evt => {
  //   setFilter(evt.currentTarget.value);
  // };

  // const deleteContact = id => {
  //   const updatedContacts = contacts.filter(contact => contact.id !== id);
  //   setContacts(updatedContacts);

  //   localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  // };

  return (
    <div className="wraper">
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />

      <ContactList>
        <ContactItem />
      </ContactList>
    </div>
  );
};
