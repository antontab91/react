const CORAL = "Coral";
const AQUA = "Aqua";
const BISQUE = "Bisque";

import React from 'react';

class ColorPicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'dsa'
    }
  }

  showNameOfColor(event) {
    this.setState({
      title: event.target.style.backgroundColor
    })
  }

  resetNameofColor() {
    this.setState({
      title: ''
    })
  }

  render() {
    return (
      <>
        <div>
          <div className="picker__title">
            {this.state.title}
          </div>
          <div>
            <button className="picker__button picker__button_coral" onMouseOver={this.showNameOfColor.bind(this)} onMouseOut={this.resetNameofColor.bind(this)} style={{ background: CORAL }}></button>
            <button className="picker__button picker__button_aqua" onMouseOver={this.showNameOfColor.bind(this)} onMouseOut={this.resetNameofColor.bind(this)} style={{ background: AQUA }}></button>
            <button className="picker__button picker__button_bisque" onMouseOver={this.showNameOfColor.bind(this)} onMouseOut={this.resetNameofColor.bind(this)} style={{ background: BISQUE }}></button>
          </div>
        </div>


      </>
    )
  }
}

export default ColorPicker;
