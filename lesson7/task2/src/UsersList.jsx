import React from 'react';
import User from './User.jsx';



class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sorting: null,
        }
    }

    toggleSorting = () => {
        const newSorting = this.state.sorting === 'asc' ? 'desc' : 'asc';
        this.setState({
            sorting: newSorting
        })
    }

    render() {

        const usersList = this.props.users.slice().sort((a, b) => {
            return this.state.sorting === 'asc' ? a.age - b.age : b.age - a.age;
        })

        return (
            <div>
                <button onClick={this.toggleSorting} className="btn">
                    {this.state.sorting || '-'}
                </button>
                <ul className='users'>
                    {
                        usersList.map((user) => {
                            return <User key={user.id} name={user.name} age={user.age} />
                        })
                    }
                </ul>
            </div>

        )
    }
}

export default UserList;