import React from 'react';
import UserMenu from './UserMenu.jsx';
import UserProfile from './UserProfile.jsx';

class App extends React.Component {
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
    return (
      <div className="page">
        <header className="header">
          <UserMenu userData={this.state.userData} />
        </header>
        <UserProfile userData={this.state.userData} />
      </div>
    )
  }
}
export default App;