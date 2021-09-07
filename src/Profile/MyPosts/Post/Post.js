import React from 'react';
import classes from './Post.module.css'

//constructor(props) {
// super(props)
// this.state = {
//  quantity: '222'
// } } <div>like: {this.state.quantity}</div>

const Post1 = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://cs6.pikabu.ru/avatars/2097/x2097369-1271064885.png' />
            {props.message}
            <div>
                <span>Like</span> {props.quantity}
            </div>
        </div>
    )
}

export default Post1;

