import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '@mui/material/Button';

interface Props {
  handleNext: () => void
}

const FormTwo: React.FC<Props> = ({ handleNext }) => {
  return (
    <Formik
      initialValues={{lastName: '' }}
      validationSchema={Yup.object({
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Please Enter the Required Second Name Field')
      })}
      onSubmit={(values) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          // setSubmitting(false);
          handleNext()
        }, 400);
      }}
    >
      <Form>

        <label htmlFor="lastName">Last Name</label>
        <br/>
        <Field name="lastName" type="text" />
        <br/>
        <ErrorMessage name="lastName" />
        <br/>
        <Button variant="contained" type="submit">Next Step</Button>
      </Form>
    </Formik>
  );
};

export default FormTwo;