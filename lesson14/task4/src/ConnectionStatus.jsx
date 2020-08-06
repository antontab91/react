import React, { useEffect, useState } from 'react';


const ConnectionStatus = () => {
  const [status, setStatus] = useState("online");

  const setClassStatus = () => {
    return `status ${status === "online" ? "status_online" : "status_offline"}`
  }

  const updateStatus = (event) => {
    setStatus(event.type)
  }

  useEffect(() => {
    window.addEventListener('online', updateStatus);
    window.addEventListener("offline", updateStatus);
    return () => {
      window.removeEventListener('online', updateStatus);
      window.removeEventListener("offline", updateStatus);
    };
  }, []);



  return (
    <div className={setClassStatus()}>{status}</div>
  )
}

export default ConnectionStatus;

// import React from 'react';

// class ConnectionStatus extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       status: 'online',
//     }
//   }

//   componentDidMount() {
//     window.addEventListener('online', this.updateStatus);
//     window.addEventListener("offline", this.updateStatus);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('online', this.updateStatus);
//     window.removeEventListener("offline", this.updateStatus);
//   }

//   updateStatus = (event) => {
//     this.setState({
//       status: event.type,
//     });
//   }

//   setClassStatus = (status) => {
//     return `status ${status === "online" ? "status_online" : "status_offline"}`
//   }

//   render() {
//     return (
//       <div className={this.setClassStatus(this.state.status)}>{this.state.status}</div>
//     )
//   }
// }

// export default ConnectionStatus;