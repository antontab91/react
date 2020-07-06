import React from 'react';

class User extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="user">
        <img className="" src="" alt="" />
        <div className="user__info">
          <span className="user__name" ></span>
          <span className="user__location"></span>
        </div>
      </div>
    )
  }
}

export default User;