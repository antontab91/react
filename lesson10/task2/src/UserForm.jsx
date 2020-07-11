import React from 'react';

class UserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: {
        firstName: 'John',
        lastName: 'Doe'
      }
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      userData: {
        ...this.state.userData,                 // ЭТА ОПЦИЯ - МЫ КОПИРУЕМ СТАРОЕ СОСТОЯНИЕ 
        [name]: value                           // А ТУТ МЕНЯЕМ ПРИ СОБЫТИИ 
      }
    })
  }


  render() {
    return (
      <form className="user-form">
        <input onChange={this.handleChange} type="text" name="firstName" className="user-form__input" value={this.state.userData.firstName} />
        <input onChange={this.handleChange} type="text" name="lastName" className="user-form__input" value={this.state.userData.lastName} />
      </form>
    )
  }
}

export default UserForm;