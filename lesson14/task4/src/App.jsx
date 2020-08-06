import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: "offline",
    }
  }

  componentDidMount() {
    window.addEventListener('online', this.updateStatus);
    window.addEventListener("offline", this.updateStatus);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.updateStatus);
    window.removeEventListener("offline", this.updateStatus);
  }

  updateStatus = (e) => {
    this.setState({
      status: e.type
    })
  }

  updateClass = () => {
    return `status ${this.state.status === "online" ? "status_online" : "status_offline"}`
  }

  render() {
    return (
      <div className={`${this.updateClass()}`}>{this.state.status}</div>
    )
  }
}

export default App;