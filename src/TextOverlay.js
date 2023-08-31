import React, { Component } from "react";
import {connect} from "react-redux";

class TextOverlay extends Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();
  }

  componentDidUpdate() {
    const {failedGuess} = this.props;
    
    if (failedGuess) {
      this.myRef.current.innerHTML = "Invalid Word! Please try again with a new word!";
      this.myRef.current.style = "display:flex;"
    } else {
      this.myRef.current.innterHTML = "";
      this.myRef.current.style = "display:none;"
    }
  }

  render(){
    return (
      <div className="textoverlay" ref={this.myRef}/>
    )
  }
}

const mapStateToProps = state => {
  return {
    failedGuess: state.failedGuess
  }
}

export default connect(mapStateToProps)(TextOverlay);
