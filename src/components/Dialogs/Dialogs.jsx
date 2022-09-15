import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Messages/Message";
import DialogItem from "./Dialog/Dialog";



const Dialogs = () => {

    let dialogsData = [
        {id:1, name:"Sasha"},
        {id:2, name:"Oleh"},
        {id:3, name:"Yuriy"},
        {id:4, name:"Alina"},
        {id:5, name:"Dasha"}
    ]
    let messagesData = [
        {id:1, message:"Hello"},
        {id:2, message:"How are you?"},
        {id:3, message:"Do you want to walk?"},
        {id:4, message:"Yes, we can!"},
        {id:5, message:"I love you..."}
    ]
return(
    <div className={s.Dialogs}>
        <div className={s.dialogsContent}>
            <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
            <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>

            <DialogItem name={dialogsData[2].name} id={dialogsData[1].id}/>
            <DialogItem name={dialogsData[3].name} id={dialogsData[1].id}/>
            <DialogItem name={dialogsData[4].name} id={dialogsData[1].id}/>

        </div>
        <div className={s.messages}>
            <Message message={messagesData[0].message}/>
            <Message message={messagesData[1].message}/>
            <Message message={messagesData[2].message}/>
            <Message message={messagesData[3].message}/>
            <Message message={messagesData[4].message}/>

        </div>

    </div>
)


}

export default Dialogs;