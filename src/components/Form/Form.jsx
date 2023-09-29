import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  StyledForm,
  StyledButton,
  Label,
  StyledField,
  StyledErrorMessage,
} from './Form.styled';

const formSchema = Yup.object({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name must contain only letters, apostrophe, dash, and spaces'
    )
    .required('Name is required'),
  number: Yup.string()
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      'Invalid phone number format'
    )
    .required('Phone number is required'),
});

export const AddContactForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={formSchema}
      onSubmit={(values, { resetForm }) => {
        onAdd(values);
        resetForm();
      }}
    >
      <StyledForm>
        <Label>
          Name
          <StyledField name="name" type="text" />
          <StyledErrorMessage name="name" component="div" />
        </Label>
        <Label>
          Number
          <StyledField name="number" type="tel" />
          <StyledErrorMessage name="number" component="div" />
        </Label>
        <StyledButton type="submit">Add contact</StyledButton>
      </StyledForm>
    </Formik>
  );
};
