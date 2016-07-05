import React, { Component} from 'react';

class Email extends Component{
  render(){
    return (
      <form onSubmit={this._handleSubmit.bind(this)}>
      <input className="input-style" placeholder="Your email here:"></input>
      <button className="submit-button" type="submit">CLAIM YOUR PRIZE</button>
      </form>
    );
  }

  _handleSubmit(event) {
    event.preventDefault();
    console.log("Form Submitted");
    document.getElementsByTagName('input')[0].value= '';
  }
}

export default Email;
