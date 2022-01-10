import React, { Component } from "react";
import InputBox from './InputBox';

class MainBody extends Component {
  render(){
    return (
      <div className="mainbody">
        <InputBox />
        <InputBox />
        <InputBox />
        <InputBox />
        <InputBox />
      </div>
    )
  }
}

export default MainBody;
