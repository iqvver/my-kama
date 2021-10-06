import React, { useState } from 'react';
import classes from './../Profile.module.css'
import Preloader from './../../components/common/preloader/Preloader'
import ProfileStatus from './ProfileStatus'
import userPhoto from '../../assets/images/ava.jpg'
import { Box, Paper } from '@material-ui/core';
import { Container } from '@mui/material'
import ProfileDataForm from './ProfileDataForm';
import ProfileData from './ProfileData'

const ProfileInfo = ({ profile, saveProfile, status, updateStatus, isOwner, savePhoto }) => {
    let [editMode, setEditMode] = useState(false);
    if (!profile) {
        return <Preloader />
    }
    const onMainPhotoSelected = (e) => { //загрузка фото на сервер
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        } else {
        }
    }
    const onSubmit = (formData) => { //передача новых данных профиля
        saveProfile(formData).then(() => { //ожидаем завершения редактированя
            setEditMode(false);             //если нет ошибок то false
        });
    }

    return (
        /*<Box>
             <img className={classes.img} src='https://images.pexels.com/photos/7734954/pexels-photo-7734954.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' />
         </Box>*/
        <Paper>
            <Container className={classes.descriptionBlock}>
                <Box>
                    <img src={profile.photos.large || userPhoto}
                        className={classes.userPhoto} />
                    {isOwner || <input type={'file'} className={classes.inputFile} onChange={onMainPhotoSelected} />}
                </Box>
                <Box>
                    {editMode
                        ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                        : <ProfileData goToEditMode={() => { setEditMode(true) }}
                            profile={profile} isOwner={isOwner}
                        />}
                </Box>
                <Box className={classes.statusBlock}>
                    <h2>My Status:</h2>
                    <ProfileStatus status={status} updateStatus={updateStatus} />
                </Box>
            </Container>
        </Paper>
    )
}
export default ProfileInfo;
