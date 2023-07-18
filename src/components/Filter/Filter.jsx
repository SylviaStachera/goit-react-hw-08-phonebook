import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { Heading, Text, Input } from '@chakra-ui/react';
import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <Heading className={css.header} size="md">
        Contacts
      </Heading>
      <Text className={css.label}>
        Find contacts by name:
        <Input
          size="sm"
          className={css.input}
          type="text"
          value={filter}
          autoComplete="off"
          placeholder="Search name..."
          onChange={e => dispatch(setFilter(e.currentTarget.value))}
        />
      </Text>
    </div>
  );
};

export default Filter;
