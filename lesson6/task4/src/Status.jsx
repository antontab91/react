import React from 'react';
import Online from './Online.jsx';
import Offline from './Offline.jsx';

const Status = (props) => {
  if (props.isOnline)
    return <Online />;

  return <Offline />
};


// class Status extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isOnline: false,
//     }

//   }

//   render() {
//     return (
//       <div className="status">

//         {
//           this.state.isOnline
//             ? <Online />
//             : <Offline />
//         }

//       </div>
//     )
//   }
// }

export default Status;
