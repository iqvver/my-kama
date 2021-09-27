import React, { Component } from 'react'
import classes from './Setting.module.css'
import PaginatorUI from '../common/Paginator/PaginatorUi'

export default class Setting extends Component {
    render() {
        return <>
            <PaginatorUI />
        </>
    }
}
console.log(React.version);
//<NavLink to="/profile" activeClassName={classes.activeLink}></NavLink>