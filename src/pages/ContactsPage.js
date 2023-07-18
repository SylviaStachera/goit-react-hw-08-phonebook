import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import ContactItem from '../components/ContactItem/ContactItem';
import Filter from '../components/Filter/Filter';

const ContactsPage = () => {
  return (
    <div>
      <ContactForm />
      <Filter />
      <ContactList>
        <ContactItem />
      </ContactList>
    </div>
  );
};

export default ContactsPage;
