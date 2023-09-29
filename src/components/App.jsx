import { useEffect, useState } from 'react';
import { AddContactForm } from './Form/Form';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Title, TitleList } from './App.styled';

const initialContacts = JSON.parse(localStorage.getItem('contacts')) || [];

export const App = () => {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  const addContact = newContact => {
    const isAlready = contacts.find(
      contact => contact.name === newContact.name
    );

    if (isAlready) {
      alert(`${newContact.name} is already in contacts.`);
    } else
      setContacts(prevState => [
        ...prevState,
        {
          id: nanoid(),
          ...newContact,
        },
      ]);
  };

  const handleDelete = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const getVisibleContacts = () => {
    return contacts.filter(contact => {
      const hasName = contact.name.toLowerCase().includes(filter.toLowerCase());

      return hasName;
    });
  };

  const changeFilter = e => setFilter(e.target.value);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = getVisibleContacts();

  return (
    <div>
      <Title>Phonebook</Title>
      <AddContactForm onAdd={addContact} />
      <TitleList>Contacts</TitleList>
      <Filter filter={filter} onChange={changeFilter} />
      <ContactList contacts={filteredContacts} onDelete={handleDelete} />
    </div>
  );
};
