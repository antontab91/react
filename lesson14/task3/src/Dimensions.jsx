import React from 'react';

class Dimensions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
    }
  }

  componentWillMount() {
    window.addEventListener('resize', this.onResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize)
  }

  onResize = (e) => {
    const { innerWidth, innerHeight } = e.target;
    this.setDimensions(innerWidth, innerHeight)
  }

  setDimensions = (width, height) => {
    this.setState({
      width: width,
      height: height,
    });
  }

  render() {
    return (
      <div className="dimensions">{`${this.state.width} - ${this.state.height}`}</div>
    )
  }
}

export default Dimensions;