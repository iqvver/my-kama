import { Box } from '@mui/system';
import React, { Component } from 'react'
import { Container } from '@mui/material'
import classes from './../Profile.module.css'

const ProfileData = (props) => {
    return (
        <Container>
            <Box>
                {props.isOwner || <button onClick={props.goToEditMode}>edit</button>}
            </Box>
            <Box className={classes.infoBlock}>
                <h2>Полное имя:{props.profile.fullName}</h2>
                <h3>Looking for a job: {props.profile.lookingForAJob ? 'yes' : 'no'}</h3>
                {props.profile.lookingForAJob &&
                    <h3>My professional skills:{props.profile.lookingForAJobDescription}</h3>}
            </Box>
            <Box className={classes.aboutMeBlock}>
                <h3>About Me:{props.profile.aboutMe}</h3>
            </Box>
            <Box className={classes.contactsBlok}>
                <Box>
                    <Box>
                        <b>Contact:</b>
                    </Box>
                    {Object.keys(props.profile.contacts).map(key => {
                        return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
                    })}
                </Box>
            </Box>
            
        </Container>
    )
}
const Contact = ({ contactTitle, contactValue, key }) => {
    return (
        <Box>
            <Box>
                {!contactValue ? false : <Box>{contactTitle} : {contactValue}</Box>}
            </Box>
        </Box>
    )
}

export default ProfileData;