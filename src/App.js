import React, { Component } from 'react';

import Keypad from "./components/Keypad";
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      input: "0",
      result: "0",
      isDark: false
    };
  }

  addToInput = val => {
    let x=this.state.input;
    let ch=x[x.length-1];
    if((this.state.input==="0" && this.state.result === "0") || (this.state.input==="0" && this.state.result !== "0" )) {
      this.setState({input: val});
      this.setState({result: val});
    }
    else {
      this.setState({input: this.state.input + val});
      let y=this.state.result;
      if(ch==="+" || ch==="-" || ch==="/" || ch==="*") {
        y=val;
      }
      else {
        y=y+val;
      }
      this.setState({result: y});
    }
  }

  handleOperator = val => {
    let x=this.state.input;
    let ch=x[x.length-1];
    if(ch==="+" || ch==="-" || ch==="/" || ch==="*") {
      x=x.slice(0, x.length-1);
      this.setState({input: x+val});
    }
    else {
      x=eval(this.state.input);
      this.setState({result: x});
      this.setState({input: x+val});
    }
  }

  handleEqual = () => {
    let x=this.state.input;
    let ch=x[x.length-1];
    if(ch!=="+" && ch!=="-" && ch!=="/" && ch!=="*") {
      x=eval(this.state.input);
      this.setState({input: "0"});
      this.setState({result: x});
    }
  }

  handleClearInput = () => {
    this.setState({input: "0"});
    this.setState({result: "0"});
  }

  handleThemeDark = () => {
    this.setState({isDark: true});
  }

  handleThemeLight = () => {
    this.setState({isDark: false});
  }

  render() {
    return (
      <div className ={`${
        this.state.isDark ? "darkApp" : "lightApp"
      }`} >
        <button className="light pos" onClick = {this.handleThemeLight}>
          Light Theme
        </button>
        <button className="dark" onClick = {this.handleThemeDark}>
          Dark Theme
        </button>
        <div className="app">
          <div className="calc-wrapper" >
            <Keypad results={this.state.result} handleEqual={this.handleEqual} isDark={this.state.isDark} addToInput = {this.addToInput} handleOperator={this.handleOperator} handleClearInput = {this.handleClearInput} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;