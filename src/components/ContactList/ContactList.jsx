import React from 'react';
import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { getFilter } from 'redux/selectors';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const filterByName = React.useMemo(() => {
    if (!filter) {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [contacts, filter]);

  return (
    <List>
      {filterByName.map(filtredContact => {
        return <Contact key={filtredContact.id} contact={filtredContact} />;
      })}
    </List>
  );
};
