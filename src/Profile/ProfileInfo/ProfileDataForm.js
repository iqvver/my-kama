import { Box } from '@mui/system';
import React, { Component } from 'react'
import { Container } from '@mui/material'
import classes from './../Profile.module.css'
import { createField, Input, Textarea } from '../../components/common/FormsControls/FormsControls';
import { reduxForm } from 'redux-form';


const ProfileDataForm = ({ handleSubmit, profile, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <Box>
                {<button>save</button>}
            </Box>
            {error && <Box className={classes.formSummaryError}>{error}</Box>}
            <Box className={classes.infoBlock}>
                <h2>Полное имя: {createField('Full name', 'fullName', [], Input)}</h2>
                <h3>Looking for a job: {createField('', 'lookingForAJob', [], Input, { type: 'checkbox' })}</h3>
                <h3>My professional skills:{createField('Professional skills', 'lookingForAJobDescription', [], Textarea)}</h3>
                <h3>About Me:{createField('About me', 'aboutMe', [], Textarea)}</h3>
            </Box>
            <Box className={classes.contactsBlok}>
                <Box>
                    <b>Contact: </b>
                </Box>
                {Object.keys(profile.contacts).map(key => {
                    return (
                        <Container>
                            <Box>
                                {key}: {createField(key, 'contacts.' + key, [], Input)}
                            </Box>
                        </Container>
                    )
                })}
            </Box>
        </form>
    )
}
const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataFormReduxForm;