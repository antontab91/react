import React from 'react';
import Filter from './Filter.jsx'


class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
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
    return (
      <div>
        <Filter handleChange={this.handleChange} value={this.state.value} />
        <ul className="users">

        </ul>
      </div>
    )
  }
}

export default UsersList;