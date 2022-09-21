import React from 'react';

function Message(props) {
  return (
    <div className="messageContent">
      <div className="message">{props.message}</div>
    </div>
  );
}
export default Message;
