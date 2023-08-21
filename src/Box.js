import React, { Component } from "react";
import { connect } from "react-redux";

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      colour: {
        "backgroundColor":"#111111"
      },
      prev: "B"
    }

    this.myRef = React.createRef();
    // this.handleChange = this.handleChange.bind(this);
    // this.onKeyDown = this.onKeyDown.bind(this);
  }

  componentDidUpdate() {
    const {colour, positionchange, wordpos, pos, wordposition, letter} = this.props;
    const {prev} = this.state;
    if (wordpos === wordposition && pos === positionchange) {
      //console.log(this.myRef.current);
      if (colour == "B") {
        this.myRef.current.style.backgroundColor = "black";
      } else if (colour == "Y") {
        this.myRef.current.style.backgroundColor = "orange";
      } else if (colour == "G") {
        this.myRef.current.style.backgroundColor = "green";
      }

      if (wordpos === wordposition && pos === positionchange && colour == null) {
        if (letter != null) {
          this.myRef.current.innerHTML = letter;
        } else {
          this.myRef.current.innerHTML = null;
        }
      }
    }
  }

  render(){
    const {pos} = this.state;
    return (
      <div className="box" id={pos} ref={this.myRef}>
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
    wordposition: state.wordpos,
    position: state.pos,
    colour: state.colour,
    positionchange: state.positionchange,
    letter: state.letter
  }
}

export default connect(mapStateToProps)(Box);
