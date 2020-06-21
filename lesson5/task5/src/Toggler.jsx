import React from 'react';

// const offText = 'Off';
// const onText = 'On';

class Toggler extends React.Component {

  constructor(props) {
    super(props)
    this.state{

    }
  }

  setOnfOff(event) {
    this.setState({

    })
  }

  render() {
    return (
      <div onClick={this.setOnfOff.bind(this)} className="toggler">{offText}</div>
    )
  }
}

export default Toggler;


// import React, { Component } from "react";

// class Toggle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isToggleOn: false
//     };
//   }
//   handleClick = () => {
//     this.setState({
//       isToggleOn: !this.state.isToggleOn
//     });
//   };
//   render() {
//     return (
//       <div onClick={this.handleClick} className="toggler">
//         {this.state.isToggleOn ? "On" : "Off"}
//       </div>
//     );
//   }
// }

// export default Toggle;