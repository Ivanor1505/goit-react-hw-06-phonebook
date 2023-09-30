import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const filterByName = () => {
    if (!filter) {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <List>
      {filterByName().map(element => {
        return <Contact key={element.id} contact={element} />;
      })}
    </List>
  );
};
