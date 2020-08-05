import React, { useState, useEffect } from 'react';

const Dimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })


  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    })

    const onResize = (e) => {
      setDimensions({
        width: e.target.innerWidth,
        height: e.target.innerHeight,
      })
    }
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    }

  }, []);



  return (
    <div className="dimensions">{`${dimensions.width} - ${dimensions.height}`}</div>
  )
}


// class Dimensions extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       width: window.innerWidth,
//       height: window.innerHeight,
//     }
//   }

//   componentDidMount() {
//     window.addEventListener('resize', this.onResize)
//   }

//   componentWillUnmount() {
//     window.removeEventListener('resize', this.onResize)
//   }

//   onResize = (e) => {
//     const { innerWidth, innerHeight } = e.target;
//     this.setDimensions(innerWidth, innerHeight)
//   }

//   setDimensions = (width, height) => {
//     this.setState({
//       width,
//       height,
//     });
//   }

//   render() {
//     return (
//       <div className="dimensions">{`${this.state.width} - ${this.state.height}`}</div>
//     )
//   }
// }

export default Dimensions;

