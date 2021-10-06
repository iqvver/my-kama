import React from "react";
import styles from "./FormsControls.module.css";
import { Box } from '@material-ui/core';
import {Field} from "redux-form";

const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <Box className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <Box>
                {props.children}
            </Box>
            { hasError && <span>{meta.error}</span> }
        </Box>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}
export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder} name={name}
               validate={validators}
               component={component}
               {...props}
        /> {text}
    </div>
)