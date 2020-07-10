import React from 'react';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: null,
    }
  }

  componentDidMount() {
    this.fetchUserData(this.props.userId);
  }

  fetchUserData = (userId) => {
    const userUrl = `https://api.github.com/users/${userId}`
    fetch(userUrl)
      .then((responce) => {
        return responce.json()
      })
      .then((userData) => {
        this.setState({
          userData: userData,
        })
      })
  }

  render() {

    if (!this.state.userData) {
      return null;
    }
    const { name, location, avatar_url } = this.state.userData;
    return (
      <div className="user">
        <img
          alt="User Avatar"
          src={avatar_url}
          className="user__avatar"
        />
        <div className="user__info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    )
  }
}

export default UserProfile;