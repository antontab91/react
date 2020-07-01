import React from 'react';

class Life extends React.Component {
  constructor(props) {
    super(props);

    console.log('constructor: good place to create state')
  }

  render() {
    return (
      <div className="s">55</div>
    )
  }
}

export default Life;