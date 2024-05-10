import classes from './InputFieldFormStyles.module.css'
import React from 'react';
const InputFieldForm= (props) => {
    
    return (
        <div className={classes.inputFieldForm}>
            <input {...props} className={classes.input_field_form}></input>
        </div>
    );

}

export default InputFieldForm;