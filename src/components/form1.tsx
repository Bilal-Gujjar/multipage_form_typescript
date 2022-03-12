import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './from.css'
import Button from '@mui/material/Button';


interface Props {
  handleNext: () => void
}

const FormOne: React.FC<Props> = ({ handleNext }) => {
  return (
    <Formik
    
      initialValues={{ firstName: '' }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Please Enter the Required First Name Field')
      })}
      onSubmit={(values) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          handleNext();
        }, 400);
      }}
    >
      <Form >
        <label className='lb' htmlFor="firstName">First Name</label>
        <br/>
        <Field  name="firstName" type="text" />
        <br/>
        <ErrorMessage name="firstName" />

        <br />
        <Button variant="contained" type="submit">Next Step</Button>
        
      </Form>
    </Formik>
  );
};

export default FormOne;