import React, { Component } from 'react';
import ButtonClose from './button'
import Email from './email'

class PinkBox extends Component {
  render() {
    return (
      <div className="main-div">
        <ButtonClose />
        <h3 className="title-font">You have won tickets to see Taylor Swift</h3>
        <p> Please enter your email so we can send you the tickets </p>
        <Email />
      </div>
    );
  }
}

export default PinkBox;
