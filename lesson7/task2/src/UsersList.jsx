import React from 'react';
import User from './User.jsx';



class UserList extends React.Component {
    constructor(props) {
        super(props);
    }

    toggleBtn() {
        console.log('huiu')
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleBtn.bind(this)} className="btn">-</button>
                <ul className='users'>
                    {
                        this.props.users.map((user) => {
                            return <User key={user.id} name={user.name} age={user.age} />
                        })
                    }
                </ul>
            </div>

        )
    }
}

export default UserList;