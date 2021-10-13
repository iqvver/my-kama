import { Box } from '@mui/system';
import * as React from 'react'
import { Container } from '@mui/material'
import classes from './../Profile.module.css'
import { createField, Input, Textarea } from '../../components/common/FormsControls/FormsControls';
import { reduxForm } from 'redux-form';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';


const ProfileDataForm = ({ handleSubmit, profile, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <Box>
                {<button>save</button>}
            </Box>
            <Stack sx={{ width: '100%' }} spacing={2}>
                {error && <Alert variant="outlined" severity="error">{error}</Alert>}
            </Stack>
            <Box className={classes.infoBlock}>
                <h2>Полное имя: {createField('Full name', 'fullName', [], Input, )}</h2>
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
                                <br/> {createField(key, 'contacts.' + key, [], Input) }
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