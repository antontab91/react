import React from 'react';
import User from './User.jsx';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

const App = () => {
  return (

    <div className="page">
      <BrowserRouter>
        <div className="page__content">
          <h1>Users</h1>
          <ul className="navigation">
            <li className="navigation__item">

              <Link to="/users/github">Github</Link>
            </li>
            <li className="navigation__item">

              <Link to="/users/facebook">Facebook</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/users/:userId" component={User} ></Route>
            <Route exact path="/users/" >
              <span>Select a user please</span>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;