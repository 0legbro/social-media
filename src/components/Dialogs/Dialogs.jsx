import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Messages/Message";
import DialogItem from "./Dialog/Dialog";



const Dialogs = (props) => {


    let dialogsElement = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

    let messagesElement = props.messages.map(message => <Message message={message.message}/>)
    return (
        <div className={s.Dialogs}>
            <div className={s.dialogsContent}>
                {dialogsElement}

            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>


        </div>
    )
}


export default Dialogs;