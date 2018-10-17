import React from "react";

export const Message = function ({content, onRemoveClick, index}) {
  return (<div className="message card text-white bg-info 0-hidden h-100">
    <div className="card-body">
      <pre>{JSON.stringify(content,0,2)}</pre>
    </div>
    <a className="card-footer text-white clearfix small z-1" href="#remove={{idx}}" onClick={onRemoveClick}>
      <span>remove</span>
    </a>
  </div>
  );
};
