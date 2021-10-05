import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../utils/Validators/Validators';
import { Box } from '@mui/system';

const maxLength50 = maxLengthCreator(50);

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id} />);
    let newMessageBody = props.dialogsPage.newMessageBody;

    let addNewMessage = (value) => {
        props.sendMessage(value.newMessageBody);
    }
    return (
        <Box className={classes.dialogs}>
            <Box className={classes.dialogsItems}>
                {dialogsElements}
            </Box>
            <Box className={classes.messages}>
                <Box>{messagesElements}</Box>
            </Box>
            <Box>
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </Box>
        </Box>
    )
}

    const AddMessageForm = (props) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <Box>
                    <Field name='newMessageBody'
                        component={Textarea}
                        placeholder='Enter your message' 
                        validate={[required, maxLength50]} />
                </Box>
                <Box>
                    <button>Send</button>
                </Box>
            </form>
        )
    }
    
const AddMessageFormRedux = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm);

export default Dialogs;