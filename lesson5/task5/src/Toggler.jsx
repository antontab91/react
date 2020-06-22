import React from 'react';

// const offText = 'Off';
// const onText = 'On';

class Toggler extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isToggleOn: false
    }
  }

  setOnfOff() {
    this.setState({
      isToggleOn: !this.state.isToggleOn,
    })
  }

  render() {
    return (
      <div onClick={this.setOnfOff.bind(this)} className="toggler">{this.state.isToggleOn ? "On" : "Off"}</div>
    )
  }
}

export default Toggler;


