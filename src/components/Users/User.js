import React from 'react'
import styles from './users.module.css'
import userPhoto from '../../assets/images/ava.jpg'
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/system';

let User = ({ user, ...props }) => {
    return <>
        <Box>
            <Box>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto}
                        className={styles.userPhoto} />
                </NavLink>
            </Box>
            <Box>
                {user.followed
                    ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                        onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
                    : <button disabled={props.followingInProgress.some(id => id === user.id)}
                        onClick={() => { props.follow(user.id) }}>follow</button>}
            </Box>
        </Box>
        <Box>
            <Box>
                <Box>{user.name}</Box>
                <Box>{user.status}</Box>
            </Box>
            <Box>
                <Box>{'user.location.country'}</Box>
                <Box>{'user.location.city'}</Box>
            </Box>
        </Box>
    </>
}

export default User;