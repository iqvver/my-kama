import { Box } from '@mui/system';
import React from 'react';
import classes from '../Dialogs.module.css';

const Message = (props) => {
    return <Box className={classes.dialog}>{props.message}</Box>
}

export default Message;
