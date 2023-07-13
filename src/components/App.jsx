import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import ContactItem from './ContactItem/ContactItem';
import Filter from './Filter/Filter';

export const App = () => {
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
