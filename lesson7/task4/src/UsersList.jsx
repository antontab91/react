import React from 'react';
import User from './User';


class UsersList extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        {/* <Pagination /> */}
        <ul className="users">
          {
            this.props.users.map((user) => {
              return (
                <User {...user} />
              )
            })
          }
        </ul>
      </div>
    );
  }
}


export default UsersList;