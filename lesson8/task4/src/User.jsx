import React from 'react';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    }
  }

  componentDidMount() {                                            // когда мы хотим получить данные из сервера нужно это делать не до первого рендера , а уже в компонет дид маунт 
    fetch(`https://api.github.com/users/${this.props.userId}`)
      .then((response) => {
        return response.json();
      }).then((data) => {
        return (
          this.setState({
            user: data,
          })
        )
      })
  }

  render() {

    const { user } = this.state;  // сначала разобрал стейт 

    if (!this.state.user) {
      return null;
    }
    const { avatar_url, location, name } = user; // потом разобрал юзера 
    return (
      <div className="user">
        <img
          className="user__avatar"
          src={avatar_url}
          alt="User Avatar"
        />
        <div className="user__info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    )
  }
}

export default User;