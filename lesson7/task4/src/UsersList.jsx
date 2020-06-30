import React, { Component } from 'react';
import User from './User';
import Pagination from './Pagination';

class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 0,
      itemsPerPage: 3
    };
  }

  goPrev = () => {
    this.setState({
      currentPage: currentPage - 1,
    })
  }

  goNext = () => {
    this.setState({
      currentPage: currentPage + 1,
    })
  }



  render() {
    const totalIthems = this.props.users.length;

    return (
      <div>
        {/* <Pagination /> */}
        <ul>
          {this.props.users.map((user) => {
            return (
              <User key={user.id} {...user} />
            )
          })}
        </ul>
      </div>
    );
  }
}

export default UsersList;