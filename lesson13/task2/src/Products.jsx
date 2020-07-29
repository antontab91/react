import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Product from './Product';

const Products = (...rest) => {
  console.log(rest)
  return (
    <div className="page__content">
      <h1>Products</h1>
      <ul className="navigation">
        <li className="navigation__item">

          <Link to="/products/ball">Ball</Link>
        </li>
        <li className="navigation__item">

          <Link to="/products/book">Book</Link>
        </li>

      </ul>
      <Switch>
        <Route exact path="/products/" >
          <span>Select a product place</span>
        </Route>

        <Route path="/products/:productId" component={Product} >
          {/* // БЛЯ АНТОХА ВСЮ НОЧЬ ОТМУЧАЛСЯ ВТЫКНУЛ ПИЗДА ТУТ НЕ ХУЯ НЕ ПЕРЕДАЕТСЯ БЛЯТЬ !!!! ПЕРЕДАЕТСЯ В КОМПОНЕНТ СУКА ЧИТАЙ КОДА И НЕ ЛУПИСЬ В ГЛАЗА  */}
        </Route>
      </Switch>

    </div>
  )
}

export default Products;

