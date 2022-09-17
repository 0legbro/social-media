import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Messages/Message";
import DialogItem from "./Dialog/Dialog";



const Dialogs = () => {

    let dialogs = [
        {id:1, name:"Sasha"},
        {id:2, name:"Oleh"},
        {id:3, name:"Yuriy"},
        {id:4, name:"Alina"},
        {id:5, name:"Dasha"}
    ]
    let dialogsElement = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/> )
    let messages = [
        {id:1, message:"Hello"},
        {id:2, message:"How are you?"},
        {id:3, message:"Do you want to walk?"},
        {id:4, message:"Yes, we can!"},
        {id:5, message:"I love you..."}
    ]
    let messagesElement = messages.map(message => <Message message ={message.message}/>)
return(
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