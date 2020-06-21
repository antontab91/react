import React from 'react';

const offText = 'Off';
const onText = 'On';

class Toggler extends React.Component {

  setOnfOff(event) {
    event.target.textContent === offText
      ? event.target.textContent = onText
      : event.target.textContent = offText;
  }

  render() {
    return (
      <button onClick={this.setOnfOff.bind(this)} className="toggler">{offText}</button>
    )
  }
}

export default Toggler;