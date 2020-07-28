import React from 'react';
import Home from './Home';
import Products from './Products'
import { BrowserRouter, Link, } from 'react-router-dom'

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


        <Home />


        <Products />
      </BrowserRouter>
    </div>

  )
}

export default App;