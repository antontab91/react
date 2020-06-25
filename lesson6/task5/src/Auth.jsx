import React from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';

class Auth extends React.Component {
    constructor(props) {
        super(props);

        render(){
            return (
                <Login />
            )
        }
    }
}

export default Auth;