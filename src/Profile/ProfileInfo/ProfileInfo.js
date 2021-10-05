import React from 'react'
import classes from './../Profile.module.css'
import Preloader from './../../components/common/preloader/Preloader'
import ProfileStatus from './ProfileStatus'
import userPhoto from '../../assets/images/ava.jpg'
import { Box } from '@material-ui/core';

const ProfileInfo = (props) => {
    if (!props.profile && !props.isAuth) {
        return <Preloader />
    }
    const onMainPhotoSelected = (e) => { //загрузка фото на сервер
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        } else {
        }
    }
    return (
        /*<Box>
             <img className={classes.img} src='https://images.pexels.com/photos/7734954/pexels-photo-7734954.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' />
         </Box>*/
        <Box>
            <Box className={classes.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto}
                    className={classes.userPhoto} />
                {props.isOwner || <input type={'file'} className={classes.inputFile} onChange={onMainPhotoSelected} />}
                <h2>{props.profile.fullName}</h2>
                <h3>{props.profile.aboutMe}</h3>
                <h3>{props.profile.lookingForAJobDescription}</h3>
                <a href={props.profile.contacts.instagram}>instagram</a>
                <h1>Aва + Тут мой профиль надо писать всякое!</h1>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            </Box>
        </Box>
    )
}
export default ProfileInfo;
