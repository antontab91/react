import React from 'react';
import UserForm from './UserForm.jsx'


class Profile extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="column">
        <UserForm />
      </div>
    )
  }
}

export default Profile;