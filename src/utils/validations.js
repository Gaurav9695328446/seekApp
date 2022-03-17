import * as Yup from 'yup';

const numberRegExp = /^[0-9]+$/;
const noSpecialChars = /^[a-zA-Z ]{2,30}$/;

export const UserValidation = Yup.object().shape({
  fullName: Yup.string()
    .required('Full Name is required')
    .matches(noSpecialChars, 'Invalid Name'),
  age: Yup.string()
    .required('Age is required')
    .matches(numberRegExp, 'Invalid Age'),
});
