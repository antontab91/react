import React from 'react';

class UsersList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <button className="btn" >-</button>
                {
                    this.props.users.map((user) => {
                        return (
                            <ul key={user.id} className='users'>
                                <li className='user'>
                                    <span>{user.name}</span>
                                    <span className="user__age">{user.age}</span>
                                </li>
                            </ul>
                        )
                    })
                }
            </div>
        )
    }
}

export default UsersList;