import React, { Component } from "react";
import InputBox from './InputBox';
import { connect } from "react-redux";

class MainBody extends Component {
  constructor(props){
    super(props);
    this.myRef = React.createRef();
  }

  componentDidUpdate() {
    const {input, wordpos, pos} = this.props;
    console.log(input);
    console.log(pos);
    if (pos !== 4) {
      return;
    }
    if (input === 13) {
      if (wordpos === 4) {
        console.log("YOU SUCK");
        return;
      }
      this.myRef.current.children[wordpos+1].children[0].focus();
      this.props.dispatch({type:6,wordpos:wordpos+1});
      this.props.dispatch({type:7,pos:0});
    }
  }

  render(){
    return (
      <div className="mainbody" ref={this.myRef}>
        <InputBox pos={0} />
        <InputBox pos={1} />
        <InputBox pos={2} />
        <InputBox pos={3} />
        <InputBox pos={4} />
      </div>
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
    wordpos: state.wordpos,
    pos: state.pos
  }
}

export default connect(mapStateToProps)(MainBody);
