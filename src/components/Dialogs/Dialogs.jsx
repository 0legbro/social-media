import React from 'react';
import s from './Dialogs.module.css';
import Message from './Messages/Message';
import DialogItem from './Dialog/Dialog';

function Dialogs(props) {
  const dialogsElement = props.state.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);
  const messagesElement = props.state.messages.map((message) => <Message message={message.message} />);
  const messageText = React.createRef();
  const sendMessage = () => {
    const messageCurrentText = messageText.current.value;
    alert(messageCurrentText);
  };
  return (
    <div className={s.Dialogs}>
      <div className={s.dialogsContent}>
        {dialogsElement}
      </div>

      <div className={s.messages}>
        {messagesElement}
        <div>
          <textarea ref={messageText} className={s.messages_sendMessageArea} name="" id="" cols="35" rows="6" />;
          <button onClick={sendMessage} className={s.messages_sendMessageButton}>
              Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
