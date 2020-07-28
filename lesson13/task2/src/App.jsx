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
            <a href="/">Home</a>
          </li>
          <li className="navigation__item">
            <a href="/products">Products</a>
          </li>
        </ul>

        <Route exact path='/' >
          <Home />
        </Route>
        <Route path='/home'>
          <Products />
        </Route>



      </BrowserRouter>

    </div>

  )
}

export default App;