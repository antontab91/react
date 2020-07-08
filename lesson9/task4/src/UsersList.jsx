import React from 'react';
import Filter from './Filter.jsx'
import User from './User.jsx'


class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
  }

  handleChange = (e) => {
    let value = e.target.value;
    this.setState({
      value,
    })
    console.log(this.state.value)
  }

  render() {

    let usersList = this.props.users.filter((user) => {
      return user.name.toLowerCase() === this.state.value.toLowerCase()
    })

    console.log(usersList)

    return (
      <div>
        <Filter onChange={this.handleChange} value={this.state.value} count={this.state.value.length} />
        <ul className="users">
          {usersList.map((user) => {
            return <User key={user.id} {...user} />
          })}
        </ul>
      </div>
    )
  }
}

export default UsersList;