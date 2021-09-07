import * as axios from 'axios'
import React, { Component } from 'react'
import styles from './users.module.css'
import userPhoto from '../../assets/images/ava.jpg'

let Users = (props) => {
        let getUsers = () => {
                if (props.users.length === 0) {
                        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                                props.setUsers(response.data.items);
                        });
                }
        }
        return <div>
                <button onClick={getUsers}>GEtUsers</button>
                {
                        props.users.map(u => <div key={u.id}>
                                <span>
                                        <div>
                                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                                        </div>
                                        <div>
                                                {u.followed ?
                                                        <button onClick={() => { props.unfollow(u.id) }}>unfollow</button>
                                                        :
                                                        <button onClick={() => { props.follow(u.id) }}>follow</button>
                                                }
                                        </div>
                                </span>
                                <span>
                                        <div>{u.name}</div>
                                        <div>{u.status}</div>
                                </span>
                                <span>
                                        <div>{'u.location.country'}</div>
                                        <div>{'u.location.city'}</div>
                                </span>
                        </div>)
                }
        </div>
}

export default Users;
