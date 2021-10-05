import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from '../Dialogs.module.css';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return <Box className={classes.dialog + ' ' + classes.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </Box>
}

export default DialogItem;