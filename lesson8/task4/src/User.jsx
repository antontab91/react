import React from 'react';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    }
  }

  render() {
    if (!this.state.user) {
      return null;
    }
    return (
      <div className="user">
        <img
          className="user__avatar"
          src="https://avatars3.githubusercontent.com/u/69631?v=4"
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