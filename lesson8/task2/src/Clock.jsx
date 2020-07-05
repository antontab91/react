import React, { Component } from 'react';
import ReactDOM from 'react-dom';



const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
}

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: getTimeWithOffset(this.props.offset).toLocaleTimeString('en-US'),
      // location: this.props.location,
    }
    this.location = this.props.location;

    setInterval(() => {
      this.setState({
        time: getTimeWithOffset(this.props.offset).toLocaleTimeString('en-US')
      })
    }, 1000);
  }

  render() {
    return (
      // <div className="ds">{this.state.time}</div>
      <div className="clock">
        <div className="clock__location">
          {this.location}
        </div>
        <div className="clock__time">
          {this.state.time}
        </div>
      </div>
    )
  }
}

export default Clock;