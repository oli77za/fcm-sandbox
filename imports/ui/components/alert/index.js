import React from "react";

export const Alert = function ({type, children}) {
  return (<div className={"alert alert-" + type}>
    {children}
  </div>);
};
