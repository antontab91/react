import React from 'react';
import ShoppingCart from './ShoppingCart';
import Profile from './Profile';

class App extends React.Component {
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
    const { firstName, lastName } = this.state.userData;
    return (
      <div className="page">
        <h1 className="title">{`Hello, ${firstName} ${lastName}`}</h1>
        <main className="content">
          <ShoppingCart userData={this.state.userData.firstName} />
          <Profile userData={this.state.userData} handleChange={this.handleChange} />

        </main>
      </div>


    )
  }
}
export default App;