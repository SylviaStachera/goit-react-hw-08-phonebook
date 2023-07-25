import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { fetchContacts, addContact } from 'redux/contacts/operations';

import css from './ContactForm.module.css';
import {
  Heading,
  FormControl,
  FormLabel,
  Input,
  InputLeftAddon,
  InputGroup,
  Button,
  ButtonGroup,
} from '@chakra-ui/react';

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
    <div>
      <Heading className={css.header} size="md">
        Phonebook
      </Heading>
      <FormControl as="form" className={css.wrapper} onSubmit={handleSubmit}>
        <div className={css.item}>
          <FormLabel>Name:</FormLabel>
          <Input
            className={css.input}
            size="sm"
            placeholder="Enter your name..."
            type="text"
            name="name"
            pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>

        <div className={css.item}>
          <FormLabel>Number:</FormLabel>
          <InputGroup size="sm">
            <InputLeftAddon className={css['input-add']} children="+48" />
            <Input
              className={css['input-phone']}
              placeholder="Enter your number..."
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </InputGroup>
        </div>

        <ButtonGroup size="sm" variant="outline" spacing="6">
          <Button type="submit" colorScheme="blue">
            Add contact
          </Button>
        </ButtonGroup>
      </FormControl>
    </div>
  );
};

export default ContactForm;
