import React from "react";

import "./Button.css";

const ClearInput = props => (
  <div className={`button-wrapper ${
        props.dark ? "dark" : "light"
    }`} 
    onClick={props.handleClear}>
    {props.children}
  </div>
);

export default ClearInput;