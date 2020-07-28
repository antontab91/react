import React from 'react';
import Home from './Home';
import Products from './Products'
import { BrowserRouter, Route, Link, } from 'react-router-dom'

const App = () => {
  return (
    <div className="page">
      <BrowserRouter>
        <ul className="navigation">
          <li className="navigation__item">

            <Link to="/">Home</Link>
          </li>
          <li className="navigation__item">
            <Link to="/products">Products</Link>
          </li>
        </ul>

        <Route exact path="/" >
          <Home />
        </Route>
        <Route path="/products">
          <Products />
        </Route>



      </BrowserRouter>

    </div>

  )
}

export default App;