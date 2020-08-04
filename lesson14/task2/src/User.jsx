import React from "react";

const url = `https://api.github.com/users`;


class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    }
  }

  componentDidMount() {
    this.fetchUserData()
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps.match.params.userId)  // те что были до этого 
    // console.log(this.props.match.params.userId) // те которые мы сейчас передали 
    if (this.props.match.params.userId !== prevProps.match.params.userId) {  //если те пропсы  что мы сейчас получили в компоненту не равны с теми что были до этого тогда перерендериваем  
      this.fetchUserData()
    }
  }



  fetchUserData() {
    const user = this.props.match.params.userId;
    // console.log(user);
    fetch(`${url}/${user}`)
      .then((responce) => {
        return responce.json()
      })
      .then((user) => {
        return this.setState({
          user: user,
        })
      })
  }

  render() {
    const { user } = this.state

    if (!user) {
      return null;
    }
    return (
      <div className="user">
        <img alt="User Avatar" src={user.avatar_url} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{user.name}</span>
          <span className="user__location">{user.location}</span>
        </div>
      </div>
    )
  }
}

export default User;