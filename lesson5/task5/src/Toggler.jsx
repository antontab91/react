// import React from 'react';

// const offText = 'Off';
// const onText = 'On';

// class Toggler extends React.Component {

//   setOnfOff(event) {
//     event.target.textContent === offText
//       ? event.target.textContent = onText
//       : event.target.textContent = offText;
//   }

//   render() {
//     return (
//       <div onClick={this.setOnfOff.bind(this)} className="toggler">{offText}</div>
//     )
//   }
// }

// export default Toggler;


import React, { Component } from "react";

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };
  }
  handleClick = () => {
    this.setState({
      isToggleOn: !this.state.isToggleOn
    });
  };
  render() {
    return (
      <div onClick={this.handleClick} className="toggler">
        {this.state.isToggleOn ? "On" : "Off"}
      </div>
    );
  }
}

export default Toggle;