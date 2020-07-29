import React from 'react';
import User from './User.jsx'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

const Users = ({ match }) => {
  return (

    <div className="page__content">
      <h1>Users</h1>
      <ul className="navigation">
        <li className="navigation__item">

          <Link to={`${match.url}/github`}>Github</Link>
        </li>
        <li className="navigation__item">
          <Link to={`${match.url}/facebook`}>Facebook</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/users">
          <span>Select a user please</span>
        </Route>
        <Route path="/users/:userId" component={User}>
          {/* <User /> */}
        </Route>
      </Switch>

    </div>
  )
}

export default Users;
