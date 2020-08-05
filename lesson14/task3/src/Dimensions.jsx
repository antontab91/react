import React from 'react';

class Dimensions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      width: null,
      height: null,
    }

  }

  render() {
    return (
      <div className="dimensions">{`${this.state.width} - ${this.state.height}`}</div>
    )
  }
}

export default Dimensions;