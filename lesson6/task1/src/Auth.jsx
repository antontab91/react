import React from 'react';
import Greeting from './Greeting.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    }

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin() {
    this.setState({
      isLoggedIn: true,
    })
  }
  handleLogout() {
    this.setState({
      isLoggedIn: false,
    })
  }


  render() {
    return (
      <div>
        <div >
          <Greeting isLoggedIn={this.state.isLoggedIn} />
        </div>
        <div className='panel'>
          {this.state.isLoggedIn
            ? <Logout onLogout={this.handleLogout} />
            : <Login onLogin={this.handleLogin} />}
        </div>
      </div>
    )
  }
}

export default Auth