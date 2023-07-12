import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { fetchContacts, addContact } from 'redux/operations';

import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = evt => {
    evt.preventDefault();

    const name = evt.target.elements.name.value;
    const number = evt.target.elements.number.value;

    const existingContact = contacts.find(contact => contact.name === name);
    if (existingContact) {
      alert('Contact with this name already exists!');
      return evt.target.reset();
    }

    const newContact = { id: nanoid(), name, number };

    dispatch(addContact(newContact));

    evt.target.reset();
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          placeholder="Enter your name..."
          type="text"
          name="name"
          pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label}>
        Number
        <input
          className={css.input}
          placeholder="Enter your number..."
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css['btn-submit']} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
