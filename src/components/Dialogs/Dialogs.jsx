import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Messages/Message";
import DialogItem from "./Dialog/Dialog";



const Dialogs = () => {
return(
    <div className={s.Dialogs}>
        <div className={s.dialogsContent}>
            <DialogItem name="Sasha" id="1"/>
            <DialogItem name="Oleh" id="2"/>
            <DialogItem name="Yuriy" id="3"/>
            <DialogItem name="Alina" id="4"/>
            <DialogItem name="Dasha" id="5"/>

        </div>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
    </div>
)


}

export default Dialogs;