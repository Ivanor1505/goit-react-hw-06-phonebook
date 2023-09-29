import { Form, Field, ErrorMessage } from "formik";
import styled from 'styled-components';

export const StyledForm = styled(Form)`
margin-left: 20px;
padding: 10px;
width: 400px;
display: flex;
flex-direction: column;
gap: 20px;
border: 2px solid black;
border-radius: 10px;
`;

export const StyledField = styled(Field)`
width: 200px;
`;

export const StyledButton = styled.button`
height: 40px;
width: 200px;
border: 2px solid black;
border-radius: 10px;
`;

export const Label = styled.label`
line-height: 20px;
display: flex;
flex-direction: column;
`;

export const StyledErrorMessage = styled(ErrorMessage)`
color: red;
`;