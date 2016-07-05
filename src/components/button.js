import React, { Component } from 'react';

class ButtonClose extends Component {
  render(){
    return (
      <button className="close-button close-right" aria-label="Close alert" type="button" onClick={this._handleFakeClose.bind(this)}>
        <span aria-hidden="true">&times;</span>
      </button>
    );
  }

  _handleFakeClose(){
    confirm("Are you sure?");
  }
}

export default ButtonClose;
