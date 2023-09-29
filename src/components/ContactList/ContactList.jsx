import { Contact } from "components/Contact/Contact";
import React from "react";
import { List } from './ContactList.styled'


export const ContactList = ({ contacts, onDelete }) => {
  return(
    <List>
          {contacts.map((contact =>
              <Contact
                  key={contact.id}
                  name={contact.name}
                  number={contact.number}
                  id={contact.id}
                  onDelete={onDelete} />
      ))}
    </List>
  );
};