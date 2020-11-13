import React from 'react';
import './App.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import FormFiled from './components/FormFiled';


interface FormValues{
  name: string;
}

const initialValues:FormValues ={
  name: ''
}

const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must have atleast 2 CHR')
    .required('Name is required')
});



function App(){

  const forSubmit = (values: FormValues): void => {
    alert(JSON.stringify(values));

  }

  return(
    <div className="App">
      <h1>Welcome Form</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={forSubmit}
        validationSchema={registerSchema}
      >
        {
          ({dirty,isValid}) => { 
            return(
              <Form>
                {/* <div>
                  <label>Name: </label>
                  <Field name="name" as = "input"/>
                  <ErrorMessage name = "name"/>
                </div> */}
                <FormFiled label= "Name" name="name"></FormFiled>
                <button disabled={!dirty || !isValid} type="submit">Sign Up Now</button>
              </Form>
            )
          }
        }
      </Formik>
    </div>
  );
}


export default App;







