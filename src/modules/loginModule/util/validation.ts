import * as Yup from 'yup';
import {EMAIL_REQUIRED, INVALID_EMAIL, PASSWORD_REQUIRED} from './strings';

export const validationSchema = Yup.object().shape({
  email: Yup.string().email(INVALID_EMAIL).required(EMAIL_REQUIRED),
  password: Yup.string().required(PASSWORD_REQUIRED),
});
