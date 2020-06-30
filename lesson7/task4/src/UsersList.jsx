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
      currentPage: this.state.currentPage - 1,
    });
  };

  goNext = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };



  render() {
    const totalIthems = this.props.users.length; // общее количество юзеров 
    const firsIndexOnCurrentPage = this.state.currentPage * this.state.itemsPerPage; // индекс первого юзера , который показывается на странице 
    const lastIndexOnCurrentPage = firsIndexOnCurrentPage + itemsPerPage; // индекс последнего юзера , который показывается на странице 
    const usersOnDisplay = this.props.users.slice(firsIndexOnCurrentPage, lastIndexOnCurrentPage); // с какого по какой индекс показываются юзеры на текущей странице

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