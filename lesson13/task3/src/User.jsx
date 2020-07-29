import React from "react";

const url = `https://api.github.com/users`;



class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }

  componentDidMount() {
    this.fetchUser(this.props.match.params.userId);
  }

  fetchUser = () => {
    fetch(`${url}/${userId}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        return this.setState({
          user: data
        })
      })
  }

  render() {
    return (
      <div className="user">
        <img alt="User Avatar" src="https://avatars1.githubusercontent.com/u/9919?v=4" className="user__avatar" />
        <div className="user__info">
          <span className="user__name">GitHub</span>
          <span className="user__location">San Francisco,CA</span>
        </div>
      </div>
    )
  }
}

export default User;