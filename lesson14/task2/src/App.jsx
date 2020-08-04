import React from 'react';
import User from './User.jsx';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    }

  }

  render() {
    return (

      <div className="page">
        <div className="page__content">
          <h1>Users</h1>
          <BrowserRouter>
            <ul className="navigation">
              <li className="navigation__item">
                <a href="/users/github">Github</a>
              </li>
              <li className="navigation__item">
                <a href="/users/facebook">Facebook</a>
              </li>
            </ul>

            <User />
          </BrowserRouter>

        </div>
      </div>
    )
  }
}

export default App;