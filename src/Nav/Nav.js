import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';

export default class Nav extends Component {
    render() {
        return (
            <nav className={classes.nav}>
                <div className={classes.item}>
                    <div>
                        <NavLink to="/profile" activeClassName={classes.activeLink}> Profile</NavLink>
                    </div>
                    <div>
                        <NavLink to="/dialogs" activeClassName={classes.activeLink}> Message</NavLink>
                    </div>
                    <div>
                        <NavLink to="/users" activeClassName={classes.activeLink}> Users</NavLink>
                    </div>
                    <div>
                        <NavLink to="/news" activeClassName={classes.activeLink}> News</NavLink>
                    </div>
                    <div>
                        <NavLink to="/music" activeClassName={classes.activeLink}> Music</NavLink>
                    </div>
                    <div>
                        <NavLink to="/setting" activeClassName={classes.activeLink}> Setting</NavLink>
                    </div>
                </div>

            </nav>
        )
    }
}
