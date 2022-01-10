import React, { Component } from "react";
import Box from "./Box"

class InputBox extends Component {
  constructor(props){
    super(props);

    this.state = {
      previous: ""
    }
    this.handleBeforeKeypress = this.handleBeforeKeypress.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);
  }

  handleBeforeKeypress(event) {
    this.setState({previous:event.target.value});
  }

  handleKeypress(event){
    const form = event.target.form;
    const index = [...form].indexOf(event.target);
    if (event.keyCode === 8 && this.state.previous === "") {
      if (index <= 0) {
        return;
      }
      form.elements[index - 1].focus();
      form.elements[index - 1].value = "";
    } else if (/[a-zA-Z]/.test(event.target.value)) {
      if (index >= 4) {
        return;
      }
      form.elements[index + 1].focus();
    }
  }
  
  render(){
    return (
      <form className="inputbox" onKeyUp={this.handleKeypress} onKeyDown={this.handleBeforeKeypress}>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
      </form>
    )
  }
}

export default InputBox;
