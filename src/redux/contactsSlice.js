import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';


const initialContacts =  [{ id: nanoid(), name: 'Ivan', number: '111-11-11' },
    { id: nanoid(), name: 'Vasyl', number: '222-22-22' }
  ];

const Slice = createSlice({
    name: "contacts",
    initialState: { contactsList: initialContacts},
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
            state.contactsList = state.contactsList.filter(element => element.id !== action.payload);
        }
    }
})

const persistConfig = {
  key: 'contacts',
  storage,
}



export const getContacts = state => state.contacts.contactsList; 

export const contactsReducer = persistReducer(persistConfig, Slice.reducer)

export const { addContactSlice, removeContactSlice } = Slice.actions;