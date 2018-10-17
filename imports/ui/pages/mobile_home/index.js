import React from "react";
import { Alert } from "/imports/ui/components/alert";
import { Registration } from "/imports/ui/components/registration";
import { Message } from "/imports/ui/components/message";

export const MobileHome = function({alert, messages, onRemoveClick, onRegisterClick, senderId, registration}) {
  return (
    <div className="mobile_home">
      {alert &&
          <Alert type={alert.type}>{alert.text}</Alert>
      }
      <Registration onRegisterClick={onRegisterClick} senderId={senderId} registration={registration}/>
      {messages && messages.map((message, index) => { return (<Message content={message} index={index} key={index} onRemoveClick={(e) => onRemoveClick(index, e)} />) })}
    </div>
  );
};
