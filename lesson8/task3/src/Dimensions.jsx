import React from 'react';

class Dimensions extends React.Component {

  constructor(props) {
    super(props);

    const { innerWidth, innerHeight } = window;
    this.state = {
      width: innerWidth,
      height: innerHeight,
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize)
  }

  onResize = event => {
    const { innerWidth, innerHeight } = event.target
    return (

      this.setState({
        width: innerWidth,
        height: innerHeight,
      })
    )
  }

  render() {
    return (
      <div>{`${this.state.height} x ${this.state.width}`}</div>
    )
  }
}

export default Dimensions;


