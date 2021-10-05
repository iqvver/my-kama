import { Box } from '@mui/system';
import React from 'react';
import classes from './Post.module.css'

//constructor(props) {
// super(props)
// this.state = {
//  quantity: '222'
// } } <Box>like: {this.state.quantity}</Box>

const Post1 = (props) => {
    return (
        <Box className={classes.item}>
            <img src='https://cs6.pikabu.ru/avatars/2097/x2097369-1271064885.png' />
            {props.message}
            <Box>
                <Box>Like</Box> {props.quantity}
            </Box>
        </Box>
    )
}

export default Post1;

