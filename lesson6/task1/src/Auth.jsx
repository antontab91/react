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

    let button = this.state.isLoggedIn
      ? <Logout onLogout={this.handleLogout.bind(this)} />
      : <Login onLogin={this.handleLogin.bind(this)} />

    return (
      <div>
        <div >
          <Greeting isLoggedIn={this.state.isLoggedIn} />
        </div>
        <div className='panel'>
          {button}
        </div>
      </div>
    )
  }
}

export default Auth