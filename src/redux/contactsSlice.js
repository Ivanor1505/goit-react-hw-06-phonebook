import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
    name: "contacts",
    initialState: [],
    reducers: {
         addContact: {reducer(state, action) {
             state.contactsList.push(action.payload);
         }, prepare(contact) {
             return {
                 payload: {
                     ...contact,
                     id: nanoid(),
                }
            }
        }},
        removeContact(state, action) {
            state.contactsList = state.contactsList.filter(contact => contact.id !== action.payload);
        }
    }
})

const persistConfig = {
  key: 'contacts',
  storage,
}

export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer)
export const { addContacts, removeContact } = contactsSlice.actions;