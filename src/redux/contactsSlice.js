import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact, toggleStatus } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
    [toggleStatus.pending]: handlePending,
    [toggleStatus.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        // const index = state.items.findIndex(
        //   task => task.id === action.payload.id
        // );
        //  state.items[index].isFavourite = !state.items[index].isFavourite;
        const contactToggle = state.items.find(contact => contact.id === action.payload.id);
        contactToggle.isFavourite = !contactToggle.isFavourite
         
      },
      [toggleStatus.rejected]: handleRejected,

  },
});
export const contactsReducer = contactsSlice.reducer;