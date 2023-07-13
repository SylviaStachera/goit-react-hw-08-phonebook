import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={filter}
        autoComplete="off"
        placeholder="Search name..."
        onChange={e => dispatch(setFilter(e.currentTarget.value))}
      />
    </label>
  );
};

export default Filter;
