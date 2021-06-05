// importing third party

import * as Yup from 'yup';

export const initialValues = {
    email: '',
    password: ''
  };

export const validationSchema = Yup.object({
    email: Yup.string().required('Required').email('Invalid Format'),
    password: Yup.string().required('Required')
  })