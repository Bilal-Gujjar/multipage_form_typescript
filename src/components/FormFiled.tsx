import React from 'react';
import {Field,ErrorMessage} from 'formik';
import TextField from '@material-ui/core/TextField'


interface FormFiledProps {
    name: string;
    label : string;
}

const FormFiled: React.FC<FormFiledProps> = ({name ,label}) => {
    return(
        <div className ="FormFiled">
            <Field
                as = {TextField}
                name={name}
                label={label}
                fullWidth
                helperText={<ErrorMessage name={name}/>}
                required
            />
            {/* <TextField label={label } fullWidth/> */}
        </div>
    );
};

export default FormFiled;