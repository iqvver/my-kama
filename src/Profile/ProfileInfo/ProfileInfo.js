import React from 'react'
import classes from './Profile.module.css'
import Preloader from './../../components/common/preloader/Preloader'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    if (!props.profile && !props.isAuth) {
        return <Preloader />
    }
    return (
        /*<div>
             <img className={classes.img} src='https://images.pexels.com/photos/7734954/pexels-photo-7734954.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' />
         </div>*/
        <div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <h2>{props.profile.fullName}</h2>
                <h3>{props.profile.aboutMe}</h3>
                <h3>{props.profile.lookingForAJobDescription}</h3>
                <a href={props.profile.contacts.instagram}>instagram</a>
                <h1>Aва + Тут мой профиль надо писать всякое!</h1>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo;
