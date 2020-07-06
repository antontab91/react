// import React from 'react';

// class Dimensions extends React.Component {

//   constructor(props) {
//     super(props);

//     const { innerWidth, innerHeight } = window;
//     this.state = {
//       width: innerWidth,
//       height: innerHeight,
//     }
//   }

//   componentDidMount() {
//     window.addEventListener('resize', this.onResize)
//   }

//   onResize = event => {
//     const { innerWidth, innerHeight } = event.target
//     return (

//       this.setState({
//         width: innerWidth,
//         height: innerHeight,
//       })
//     )

//   }

//   render() {
//     return (
//       <div>{`${this.state.height} x ${this.state.width}`}</div>
//     )
//   }
// }

// export default Dimensions;


// import React, { Component } from "react";

// class Dimensions extends Component {
//   constructor(props) {
//     super(props);
//     const { innerWidth, innerHeight } = window;
//     this.state = {
//       width: innerWidth,
//       height: innerHeight,
//     }
//   };
//   componentDidMount() {
//     window.addEventListener("resize", this.onResize);
//     this.setDimensions(innerWidth, innerHeight);
//   }
//   componentWillUnmount() {
//     window.removeEventListener("resize", this.onResize);
//   }

//   onResize = (e) => {
//     const { innerWidth, innerHeight } = e.target;
//     this.setDimensions(innerWidth, innerHeight);
//   };

//   setDimensions = (width, height) => {
//     this.setState({
//       width,
//       height,
//     });
//     document.title = `${innerWidth} x ${innerHeight}`;
//   };

//   render() {
//     return (
//       <div className="dimensions">{`${this.state.width}px - ${this.state.height}px`}</div>
//     );
//   }
// }

// export default Dimensions;

import React from 'react';

class Dimensions extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
    }

    this.onResize = this.onResize.bind(this);  // тут втыкнул привязать контекст 
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize(e) {
    const { innerWidth, innerHeight } = e.target;
    this.setDementions(innerWidth, innerHeight);
  }

  setDementions(width, height) {

    this.setState({
      width: width,
      height: height,
    })

    document.title = `${innerWidth} x ${innerHeight}`;
  }

  render() {
    return (
      <div className="dimensions">{`${this.state.width} x ${this.state.height}`}</div>
    )
  }
}

export default Dimensions;
