import * as axios from 'axios'
import React, { Component } from 'react'
import styles from './users.module.css'
import userPhoto from '../../assets/images/ava.jpg'
import { Box } from '@mui/system'

let Users = (props) => {
        let getUsers = () => {
                if (props.users.length === 0) {
                        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                                props.setUsers(response.data.items);
                        });
                }
        }
        return <Box>
                <button onClick={getUsers}>GEtUsers</button>
                {
                        props.users.map(u => <Box key={u.id}>
                                <span>
                                        <Box>
                                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                                        </Box>
                                        <Box>
                                                {u.followed ?
                                                        <button onClick={() => { props.unfollow(u.id) }}>unfollow</button>
                                                        :
                                                        <button onClick={() => { props.follow(u.id) }}>follow</button>
                                                }
                                        </Box>
                                </span>
                                <span>
                                        <Box>{u.name}</Box>
                                        <Box>{u.status}</Box>
                                </span>
                                <span>
                                        <Box>{'u.location.country'}</Box>
                                        <Box>{'u.location.city'}</Box>
                                </span>
                        </Box>)
                }
        </Box>
}

export default Users;
