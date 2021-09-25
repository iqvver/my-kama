import React from 'react'
import styles from './users.module.css'
import userPhoto from '../../assets/images/ava.jpg'
import { NavLink } from 'react-router-dom';

let User = ({ user, ...props }) => {
    return <>
        <span>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto}
                        className={styles.userPhoto} />
                </NavLink>
            </div>
            <div>
                {user.followed
                    ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                        onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
                    : <button disabled={props.followingInProgress.some(id => id === user.id)}
                        onClick={() => { props.follow(user.id) }}>follow</button>}
            </div>
        </span>
        <span>
            <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
            <span>
                <div>{'user.location.country'}</div>
                <div>{'user.location.city'}</div>
            </span>
        </span>
    </>
}

export default User;