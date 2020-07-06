import React from 'react';

class ConnectionStatus extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'online',
    }

    console.log(this.state.status)
  }

  componentDidMount() {
    window.addEventListener('online', (event) => {
      console.log(event);
    })
  }

  render() {
    return (
      <div className="status status_offline">Offline</div>
    )
  }
}

export default ConnectionStatus;