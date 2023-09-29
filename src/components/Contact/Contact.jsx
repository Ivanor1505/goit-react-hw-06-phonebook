import React from 'react';
import { Button, CotactItem } from './Contact.styled';

export const Contact = ({ name, number, id, onDelete }) => {
  return (
    <CotactItem>
      <p>
        {name}: {number}
      </p>
      <Button onClick={() => onDelete(id)}>Delete</Button>
    </CotactItem>
  );
};
