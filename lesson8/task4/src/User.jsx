import React from 'react';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      locatiom: null,
      avatarUrl: null,
    }
  }

  render() {
    return (
      <div className="user">
        <img
          className="user__avatar"
          src=""
          alt="User Avatar"
        />
        <div className="user__info">
          <span className="user__name"></span>
          <span className="user__location"></span>
        </div>
      </div>
    )
  }
}

export default User;