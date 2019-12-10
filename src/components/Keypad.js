import React from 'react';

import Button from "./Button";
import Input from "./Input";
import ClearInput from "./ClearInput";

const Keypad = props => (
    <div>
        <Input input={props.results} />
        <div className="row">
            <Button handleClick = {props.addToInput} dark = {props.isDark}>1</Button>
            <Button handleClick = {props.addToInput} dark = {props.isDark}>2</Button>
            <Button handleClick = {props.addToInput} dark = {props.isDark}>3</Button>
            <Button handleClick = {props.handleOperator} dark = {props.isDark}>+</Button>
        </div>
        <div className="row">
            <Button handleClick = {props.addToInput} dark = {props.isDark}>4</Button>
            <Button handleClick = {props.addToInput} dark = {props.isDark}>5</Button>
            <Button handleClick = {props.addToInput} dark = {props.isDark}>6</Button>
            <Button handleClick = {props.handleOperator} dark = {props.isDark}>-</Button>
        </div>
        <div className="row">
            <Button handleClick = {props.addToInput} dark = {props.isDark}>7</Button>
            <Button handleClick = {props.addToInput} dark = {props.isDark}>8</Button>
            <Button handleClick = {props.addToInput} dark = {props.isDark}>9</Button>
            <Button handleClick = {props.handleOperator} dark = {props.isDark}>*</Button>
        </div>
        <div className="row">
            <ClearInput handleClear={props.handleClearInput} dark = {props.isDark}>Clear</ClearInput>
            <Button handleClick = {props.addToInput} dark = {props.isDark}>0</Button>
            <Button handleClick = {() => props.handleEqual()} dark = {props.isDark}>=</Button>
            <Button handleClick = {props.handleOperator} dark = {props.isDark}>/</Button>
        </div>
    </div>
);

export default Keypad;