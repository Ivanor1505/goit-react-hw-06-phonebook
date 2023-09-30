import { AddContactForm } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Title, TitleList } from './App.styled';

export const App = () => {
  return (
    <div>
      <Title>Phonebook</Title>
      <AddContactForm />
      <TitleList>Contacts</TitleList>
      <Filter />
      <ContactList />
    </div>
  );
};
