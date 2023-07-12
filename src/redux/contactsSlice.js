import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const handlePending = state => {
  return {
    ...state,
    loading: true,
  };
};

const handleRejected = (state, action) => {
  return {
    ...state,
    loading: false,
    error: action.payload,
  };
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      return {
        ...state,
        loading: false,
        error: null,
        items: action.payload,
      };
    },
    [fetchContacts.rejected]: handleRejected,

    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      return {
        ...state,
        loading: false,
        error: null,
        items: [action.payload, ...state.items],
      };
    },
    [addContact.rejected]: handleRejected,

    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      return {
        ...state,
        loading: false,
        error: null,
        items: state.items.filter(item => item.id !== action.payload.id),
      };
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;
