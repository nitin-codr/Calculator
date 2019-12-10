import React from 'react';

import "./Button.css";

const Button = props => (
    <div 
        className={`button-wrapper ${
            props.dark ? "dark" : "light"
        }`}
        onClick= {() => props.handleClick(props.children)}>
        {props.children}
    </div>
);

export default Button;