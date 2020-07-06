import React from 'react';

class ConnectionStatus extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="status status_offline">Offline</div>
    )
  }
}

export default ConnectionStatus;