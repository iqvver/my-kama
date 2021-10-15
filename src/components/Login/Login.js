import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { Field, reduxForm } from 'redux-form'
import { login } from '../../redux/auth-reducer'
import { required, emailValidate } from '../../utils/Validators/Validators'
import { createField, Input, Sw } from '../common/FormsControls/FormsControls'
import classes from '../common/FormsControls/FormsControls.module.css'
import { FormControlLabel, Checkbox, Box, } from '@material-ui/core';
import { Paper } from '@mui/material'

const LoginForm = (props) => {
    return (<Paper>
        <>
            <form onSubmit={props.handleSubmit}>
                <Box>
                    <Field placeholder={"Email"}
                        name={"email"}
                        label='Email'
                        validate={[emailValidate]}
                        component={Input}
                    />
                </Box>
                <br />
                <Box>
                    <Field
                        placeholder={"Password"}
                        name={"password"}
                        label='Password'
                        validate={[required]}
                        component={Input}
                        type={"password"}
                    />
                </Box>
                <Box>
                    <FormControlLabel
                        control={
                            <Checkbox defaultChecked />}
                        name={"rememberMe"}
                        label="remember me" />
                </Box>

                {props.captchaUrl && <img src={props.captchaUrl} />}
                {props.captchaUrl && createField('Введите символы с картинки', 'captcha', [required], Input, 'label')}

                {props.error && <Box className={classes.formSummaryError}>
                    {props.error}
                </Box>}
                <Box>
                    <button>Login</button>
                </Box>
            </form>
            <form>
                <button type="submit" formAction="https://social-network.samuraijs.com/signUp">Registration</button>
            </form>
        </>
    </Paper>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)
const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }
    return (
        <Box>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </Box>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
})

export default connect(mapStateToProps, { login })(Login);