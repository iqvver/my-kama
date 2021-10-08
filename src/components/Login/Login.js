import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { Field, reduxForm } from 'redux-form'
import { login } from '../../redux/auth-reducer'
import { required, emailValidate } from '../../utils/Validators/Validators'
import { Input } from '../common/FormsControls/FormsControls'
import classes from '../common/FormsControls/FormsControls.module.css'
import { FormControlLabel, Checkbox, Box, Switch,} from '@material-ui/core';
import TextField from '@mui/material/TextField';
import { Paper } from '@mui/material'

const LoginForm = (props) => {
    return (<Paper>
        <>
            <form onSubmit={props.handleSubmit}>
                <Box>
                    <Field placeholder={"Email"}
                        name={"email"}
                        validate={[emailValidate]}
                        component={Input}
                    />
                </Box>
                <Box>
                    <Field
                        placeholder={"Password"}
                        name={"password"}
                        validate={[required]}
                        component={Input}
                        type={"password"}
                    />
                </Box>
                <Box>
                    <Field component={Input}
                        name={"rememberMe"}
                        type={"checkbox"} /> remember me
                </Box>
                {props.error && <Box className={classes.formSummaryError}>
                    {props.error}
                </Box>}

                <FormControlLabel //переключение logIn, logAut
                    control={
                        <Switch
                            checked={props.isAuth}
                            onChange={props.handleSubmit}
                            aria-label="logIn switch"
                        />}
                    label={props.isAuth ? 'LogIn' : <Box>LogIn</Box>}
                />
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
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }
    return (
        <Box>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </Box>
    )
}
const mapStateToProps = (state) => ({ isAuth: state.auth.isAuth })

export default connect(mapStateToProps, { login })(Login);