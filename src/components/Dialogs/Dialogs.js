import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../utils/validators/validators';

const maxLength50 = maxLengthCreator(50);

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id} />);
    let newMessageBody = props.dialogsPage.newMessageBody;

    let addNewMessage = (value) => {
        props.sendMessage(value.newMessageBody);
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
            </div>
            <div>
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    )
}

    const AddMessageForm = (props) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name='newMessageBody'
                        component={Textarea}
                        placeholder='Enter your message' 
                        validate={[required, maxLength50]} />
                </div>
                <div>
                    <button>Send</button>
                </div>
            </form>
        )
    }
    
const AddMessageFormRedux = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm);

export default Dialogs;