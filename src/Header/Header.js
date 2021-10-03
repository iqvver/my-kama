import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import { FormControlLabel, Switch, } from '@material-ui/core';

const Header = (props) => {
    const [isAuth, setAuth] = React.useState(true);
    const handleChange = (event) => {
        setAuth(event.target.checked);
    };
    return <header className={classes.header}>
        <img className={classes.img} src="https://cdn.dribbble.com/users/1814782/screenshots/6504236/vp_logo.jpg" /> 
        <div className={classes.logonBlock}> 
            <FormControlLabel //переключение logIn, logAut
                control={
                    <Switch
                        checked={props.isAuth}
                        onChange={props.logout}
                        aria-label="login switch"
                    />}
                label={props.isAuth ? 'LogOut' : <NavLink to={'/login'}>LogIn</NavLink>}
            />
        </div>
    </header>
}

export default Header;
