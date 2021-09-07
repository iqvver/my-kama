import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
    return <header className={classes.header}>
        <img className={classes.img} src="https://cdn.dribbble.com/users/1814782/screenshots/6504236/vp_logo.jpg" />

        <div className={classes.logonBlock}>
            { props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>
}

export default Header;
