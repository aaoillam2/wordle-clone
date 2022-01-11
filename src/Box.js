import React, { Component } from "react";
import { connect } from "react-redux";

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
    const {wordpos, pos,position} = this.props;
    if (!/[a-zA-Z]/.test(event.target.value)) {
        event.preventDefault();
    } else {
      var arrwords = [this.props.word0, this.props.word1, this.props.word2, this.props.word3, this.props.word4];
      var newwords = arrwords[wordpos];
      if (newwords[pos] != "") {
        event.preventDefault();
        return;
      }
      var temp = event.target.value;
      this.setState({input:temp.toUpperCase()});
      newwords[pos] = temp.toUpperCase();
      this.props.dispatch({type:wordpos,word:newwords});
      if (position === 4) {
        return;
      }
      this.props.dispatch({type:7, pos:position+1});
    }
  }

  onKeyDown(event) {
    const {wordpos, pos, position} = this.props;
    this.props.dispatch({type:5,input:event.keyCode});
    if (event.keyCode === 8) {
      this.setState({input:""});
      var arrwords = [this.props.word0, this.props.word1, this.props.word2, this.props.word3, this.props.word4];
      var newwords = arrwords[wordpos];
      newwords[pos] = "";
      if (position === 0) {
        return;
      }
      this.props.dispatch({type:wordpos,word:newwords});
      this.props.dispatch({type:7, pos:position-1});
    }
  }

  returnFalse() {
    return false;
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

const mapStateToProps = state => {
  return {
    word0: state.word0,
    word1: state.word1,
    word2: state.word2,
    word3: state.word3,
    word4: state.word4,
    input: state.input,
    wordposition: state.wordpos,
    position: state.pos
  }
}

export default connect(mapStateToProps)(Box);
