import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Messages/Message";
import DialogItem from "./Dialog/Dialog";



const Dialogs = (props) => {

    let dialogsElement = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElement = props.state.messages.map(message => <Message message={message.message}/>)

    let messageText = React.createRef();

    let sendMessage =()=>{
        let messageCurrentText = messageText.current.value;
        alert(messageCurrentText)

    }

    return (

        <div className={s.Dialogs}>
            <div className={s.dialogsContent}>
                {dialogsElement}
            </div>

            <div className={s.messages}>
                {messagesElement}
                <div >
                    <textarea ref={messageText} className={s.messages_sendMessageArea} name="" id="" cols="35" rows="6"></textarea>
                    <button onClick={sendMessage} className={s.messages_sendMessageButton}>Send Message</button>
                </div>
            </div>
        </div>
    )
}


export default Dialogs;