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
            onSpinnerOn: true,
        })

        this.showSpinner()
    }

    onLogoutPush = () => {
        this.setState({
            onLogin: true,
        })
    }

    showSpinner = () => {
        this.setState({
            onLogin: false,
        });

        setTimeout(() => {
            this.setState({
                onSpinnerOn: false,
            });
        }, 2000);
    };



    render() {
        let button = this.state.onLogin
            ? <Login onLogin={this.onLoginPush} />
            : <Logout onLogout={this.onLogoutPush} />

        return (
            <div>
                {
                    this.state.onSpinnerOn
                        ? <Spinner size={50} />
                        : button
                }
            </div>
        )
    }


}

export default Auth;