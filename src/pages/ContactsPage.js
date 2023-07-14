import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import ContactItem from '../components/ContactItem/ContactItem';
import Filter from '../components/Filter/Filter';

export const ContactsPage = () => {
  return (
    <div>
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
