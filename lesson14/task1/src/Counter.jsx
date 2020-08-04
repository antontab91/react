import React, { useState } from "react";

// class Counter extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       number: 0,
//     }
//   }

//   increment = () => {
//     this.setState({
//       number: this.state.number + 1,
//     })
//   }

//   decrement = () => {
//     this.setState({
//       number: this.state.number - 1,
//     })
//   }


//   render() {
//     return (
//       <div className="counter">
//         <button onClick={this.decrement} className="counter__button">
//           -
//         </button>

//         <span className="counter__value">
//           {this.state.number}
//         </span>

//         <button onClick={this.increment} className="counter__button">
//           +
//         </button>
//       </div>
//     )
//   }
// }

const Counter = () => {
  const [number, changeNumder] = useState(0);

  // console.log(useState(0))

  return (
    <div className="counter">
      <button onClick={() => { changeNumder(number - 1) }} className="counter__button">
        -
        </button>

      <span className="counter__value">
        {number}
      </span>

      <button onClick={() => { changeNumder(number + 1) }} className="counter__button">
        +
      </button>
    </div>
  )
}


export default Counter;