import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { Field, reduxForm } from 'redux-form'
import { login } from '../../redux/auth-reducer'
import { required, emailValidate } from '../../utils/Validators/Validators'
import { Input } from '../common/FormsControls/FormsControls'
import classes from '../common/FormsControls/FormsControls.module.css'
import { FormControlLabel, Switch, } from '@material-ui/core';

const LoginForm = (props) => {
    return ( <>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"}
                    name={"email"}
                    validate={[emailValidate]}
                    component={Input} />
            </div>
            <div>
                <Field placeholder={"Password"}
                    name={"password"}
                    validate={[required]}
                    component={Input}
                    type={"password"} />
            </div>
            <div>
                <Field component={Input}
                    name={"rememberMe"}
                    type={"checkbox"} /> remember me
            </div>
            { props.error && <div className={classes.formSummaryError}>
                {props.error}
            </div>}
            
            <FormControlLabel //переключение logIn, logAut
                control={
                    <Switch
                        checked={props.isAuth}
                        onChange={props.handleSubmit}
                        aria-label="logIn switch"
                    />}
                    label={props.isAuth ? 'LogIn' : <div>LogIn</div>}
            />
        </form>
        <form>
        <button type="submit" formAction="https://social-network.samuraijs.com/signUp">Registration</button>
    </form>
    </>
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
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}
const mapStateToProps = (state) => ({ isAuth: state.auth.isAuth })

export default connect(mapStateToProps, { login })(Login);