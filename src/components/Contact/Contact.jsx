import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';
import { Button, CotactItem } from './Contact.styled';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <CotactItem>
      <p>
        {contact.name}: {contact.number}
      </p>
      <Button
        onClick={e => dispatch(removeContact(e.target.id))}
        id={contact.id}
      >
        Delete
      </Button>
    </CotactItem>
  );
};
