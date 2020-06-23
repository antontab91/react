import React, { Component } from 'react';
import Greeting from './Greeting';
import Logout from './Logout';
import Login from './Login';

class Auth extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className='panel'>
                    <Greeting />
                    <div>
                        <Login />
                    </div>
                </div>
            </>
        )
    }
}

export default Auth;