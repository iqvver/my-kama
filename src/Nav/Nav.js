import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';
import { Paper, MenuList, MenuItem, Box } from '@material-ui/core';

export default class Nav extends Component {
    render() {
        return (
            <Box className={classes.nav}>
                <Box className={classes.item}>
                    <Paper elevation={16}>
                    <MenuList>
                        <NavLink to="/profile" activeClassName={classes.activeLink}>
                            <MenuItem>Profile</MenuItem>
                        </NavLink>
                        <NavLink to="/dialogs" activeClassName={classes.activeLink}>
                            <MenuItem>Dialogs</MenuItem>
                        </NavLink>
                        <NavLink to="/users" activeClassName={classes.activeLink}>
                            <MenuItem>Users</MenuItem>
                        </NavLink>
                        <NavLink to="/news" activeClassName={classes.activeLink}>
                            <MenuItem>News</MenuItem>
                        </NavLink>
                        <NavLink to="/music" activeClassName={classes.activeLink}>
                            <MenuItem>Music</MenuItem>
                        </NavLink>
                        <NavLink to="/setting" activeClassName={classes.activeLink}>
                            <MenuItem>Setting</MenuItem>
                        </NavLink>
                    </MenuList>
                    </Paper>
                </Box>
            </Box>
        )
    }
}
