import React from "react";

export const Registration = function({senderId, onRegisterClick, registration}) {
  return (<div className="registration card text-white bg-secondary o-hidden h-100">
    <div className="card-body">
      <div className="mr-5">
        <div className="form-group">
          <label htmlFor="senderID">Sender ID</label>
          <input className="form-control" id="senderID" type="text" name="senderID" placeholder="senderID" defaultValue={senderId}/>
        </div>
        <button className="btn btn-primary" onClick={onRegisterClick} >Register</button>
      </div>
    </div>
    <a className="card-footer text-white clearfix small z-1" href="#">
      <pre>{registration && registration.registrationId}</pre>
    </a>
  </div>
  );
};
