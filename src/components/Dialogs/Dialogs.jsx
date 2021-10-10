import s from './Dialogs.module.css'

import DialogsItem from "./DialogsItem/DialogsItem";
import MessagesItem from "./MessagesItem/MessagesItem";
import React from "react";
import {Redirect} from "react-router-dom";
import {Field, reduxForm, reset} from "redux-form";
import {TextArea} from "../common/FormsControls/FormControls";
import {maxLengthCreator, required} from "../utils/validators/validators";
const maxLength15 = maxLengthCreator(15)
let DialogsForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='message' validate={[required, maxLength15]}
                       placeholder='Enter new message' component={TextArea}></Field>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

DialogsForm = reduxForm({form:'dialogs'})(DialogsForm)

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogsData
        .map(d => <DialogsItem name={d.name} id={d.id}/>)
    let messagesElements = props.dialogsPage.messagesData
        .map(m => <MessagesItem message={m.message}/>)

    let onSubmit = (data, dispatch) => {
        props.sendMessage(data.message)
        dispatch(reset('dialogs'))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <DialogsForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

export default Dialogs
