import React, { Component } from "react";

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  handleChange(event) {
    if (!/[a-zA-Z]/.test(event.target.value)) {
        event.preventDefault();
    } else {
      var temp = event.target.value;
      this.setState({input:temp.toUpperCase()});
    }
  }

  onKeyDown(event) {
    if (event.keyCode === 8) {
      this.setState({input:""});
    }
  }

  render(){
    return (
      <input type="text" className="box" maxLength="1" 
      onChange={this.handleChange} value={this.state.input}
      onKeyDown={this.onKeyDown}>
      </input>
    )
  }
}

export default Box;
