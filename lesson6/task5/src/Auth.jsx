import React from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';

class Auth extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            onLogin: true,
            onSpinnerOn: false,
        }
    }

    onLoginPush = () => {
        this.setState({
            onLogin: false,
        })
    }

    onLogoutPush = () => {
        this.setState({
            onLogin: true,
        })
    }


    render() {
        let button = this.state.onSpinnerOn
            ? <Spinner />
            : <Logout />

        return (
            <div>
                {
                    this.state.onLogin
                        ? <Login onLogin={this.onLoginPush} />
                        : { button }
                }
            </div>
        )
    }
}

export default Auth;