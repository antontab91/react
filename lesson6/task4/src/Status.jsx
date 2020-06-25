import React from 'react';
import Online from './Online.jsx';
import Offline from './Offline.jsx';

class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOffline: true,
    }

  }

  render() {
    return (
      <>

        {
          this.state.isOffline
            ? <Online />
            : <Offline />
        }

      </>
    )
  }
}

export default Status;
