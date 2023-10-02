import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
    name: "contacts",
    initialState: [],
    reducers: {
         addContactSlice: {reducer(state, action) {
             state.contactsList.push(action.payload);
         }, prepare(contact) {
             return {
                 payload: {
                     ...contact,
                     id: nanoid(),
                }
            }
        }},
        removeContactSlice(state, action) {
            state.contactsList = state.contactsList.filter(contact => contact.id !== action.payload);
        }
    }
})

const persistConfig = {
  key: 'contacts',
  storage,
}



export const getContacts = state => state.contacts.contactsList; 

export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer)

export const { addContactSlice, removeContactSlice } = contactsSlice.actions;