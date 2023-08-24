import React, { Component } from "react";

class Key extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    const {id} = this.props;

    return (
      <div className="key" id={id}>
          {id}
      </div>
    )
  }
}

export default Key;
