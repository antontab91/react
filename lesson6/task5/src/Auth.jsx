import React from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';

class Auth extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            onLogin: false,
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
            onLogin: false,
        })
    }

    showSpinner = () => {
        this.setState({
            onLogin: true,
        });

        setTimeout(() => {
            this.setState({
                onSpinnerOn: false,
            });
        }, 2000);
    };



    render() {
        let button = this.state.onLogin
            ? <Logout onLogout={this.onLogoutPush} />
            : <Login onLogin={this.onLoginPush} />

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