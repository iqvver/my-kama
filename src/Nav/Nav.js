import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';
import { Paper, MenuList, MenuItem, Box, Divider } from '@material-ui/core';

export default class Nav extends Component {
    render() {
        return (
            <Paper className={classes.nav}>
                <Box className={classes.item}>
                    <Paper elevation={16}>
                    <MenuList>
                    <Divider />
                        <NavLink to="/profile" activeClassName={classes.activeLink}>
                            <MenuItem>Profile</MenuItem>
                        </NavLink>
                        <Divider />
                        <NavLink to="/dialogs" activeClassName={classes.activeLink}>
                            <MenuItem>Dialogs</MenuItem>
                        </NavLink>
                        <Divider />
                        <NavLink to="/users" activeClassName={classes.activeLink}>
                            <MenuItem>Users</MenuItem>
                        </NavLink>
                        <Divider />
                        <NavLink to="/news" activeClassName={classes.activeLink}>
                            <MenuItem>News</MenuItem>
                        </NavLink>
                        <Divider />
                        <NavLink to="/music" activeClassName={classes.activeLink}>
                            <MenuItem>Music</MenuItem>
                        </NavLink>
                        <Divider />
                        <NavLink to="/setting" activeClassName={classes.activeLink}>
                            <MenuItem>Setting</MenuItem>
                        </NavLink>
                        <Divider />
                    </MenuList>
                    </Paper>
                </Box>
            </Paper>
        )
    }
}
