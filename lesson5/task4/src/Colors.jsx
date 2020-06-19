const RED = "#f00";
const GREEN = "#0f0";
const BLUE = "#00f";

import React from 'react';

class Colors extends React.Component {
  setBodyColor(color) {
    document.body.style.backgroundColor = color;
  }

  render() {
    return (
      <>
        <button className="colors__button" onClick={this.setBodyColor.bind(this, RED)} style={{ background: RED }}></button>
        <button className="colors__button" onClick={this.setBodyColor.bind(this, GREEN)} style={{ background: GREEN }}></button>
        <button className="colors__button" onClick={this.setBodyColor.bind(this, BLUE)} style={{ background: BLUE }}></button>
      </>
    )
  }
}

export default Colors;
