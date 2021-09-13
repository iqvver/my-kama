import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { Field, reduxForm } from 'redux-form'
import { login } from '../../redux/auth-reducer'
import { required, emailValidate } from '../../Utils/Validators/Validators'
import { Input } from '../common/FormsControls/FormsControls'

/*
const validate = values => {
    const errors = {}
    if (!values.email) {
        errors.email = 'Обязательное поле'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Не корректно введен email'
    }
    if (!values.password) {
        errors.password = 'Обязательное поле'
    }
    return errors
}
const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
}) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched &&
                ((error && <span>{error}</span>) ||
                    (warning && <span>{warning}</span>))}
        </div>
    </div>
*/

const LoginForm = (props) => {
    return (
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
            <div>
                <button>Login</button>
            </div>
        </form>
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