import React, { useState, useEffect } from "react";

const getTime = (timezone) => {
  const currentTimeZone = new Date().getTimezoneOffset() / 60;
  const locationTimeZone = new Date(
    new Date().setHours(
      new Date().getHours() + currentTimeZone + timezone
    )
  );
  return locationTimeZone;
};

// class Clock extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       cityTime: getTime(this.props.offset).toLocaleTimeString("en-US"),
//     }
//   }

//   componentDidMount() {
//     this.interval = setInterval(() => {
//       this.setState({
//         cityTime: getTime(this.props.offset).toLocaleTimeString("en-US")
//       })
//     }, 1000)
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }

//   render() {
//     return (
//       <div className="clock">
//         <div className="clock__location">{this.props.location}</div>
//         <div className="clock__time">{this.state.cityTime}</div>
//       </div>
//     )
//   }
// }

// export default Clock;


const Clock = ({ location, offset }) => {
  const [cityTime, setcityTime] = useState(getTime(offset).toLocaleTimeString("en-US"));

  useEffect(() => {
    const interval = setInterval(() => {
      setcityTime(getTime(offset).toLocaleTimeString("en-US"))
    }, 1000);
    return () => {
      clearInterval(interval)
    };
  }, []);


  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{cityTime}</div>
    </div>
  );
};

export default Clock;
