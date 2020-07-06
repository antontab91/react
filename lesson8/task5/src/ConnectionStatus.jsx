import React from 'react';

class ConnectionStatus extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'online',
    }
    this.updateStatus = this.updateStatus.bind(this);
    this.setClassStatus = this.setClassStatus.bind(this);
  }

  componentDidMount() {
    window.addEventListener('online', this.updateStatus);
    window.addEventListener("offline", this.updateStatus);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.updateStatus);
    window.removeEventListener("offline", this.updateStatus);
  }

  updateStatus(event) {
    this.setState({
      status: event.type,
    });
  }

  setClassStatus(status) {
    return `status ${status === "online" ? "status_online" : "status_offline"}`
  }

  render() {
    return (
      <div className={this.setClassStatus(this.state.status)}>{this.state.status}</div>
    )
  }
}

export default ConnectionStatus;