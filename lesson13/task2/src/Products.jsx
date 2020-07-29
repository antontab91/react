import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Product from './Product';

const Products = ({ match }) => {
  console.log(match)
  return (
    <div className="page__content">
      <h1>Products</h1>
      <ul className="navigation">
        <li className="navigation__item">

          <Link to={`${match.url}/ball`}>Ball</Link>
        </li>
        <li className="navigation__item">

          <Link to={`${match.url}/book`}>Book</Link>
        </li>

      </ul>
      <Switch>
        <Route exact path={`${match.url}`} >
          <span>Select a product place</span>
        </Route>

        <Route path={`${match.url}/:productId`} component={Product} >
          {/* // БЛЯ АНТОХА ВСЮ НОЧЬ ОТМУЧАЛСЯ ВТЫКНУЛ ПИЗДА ТУТ НЕ ХУЯ НЕ ПЕРЕДАЕТСЯ БЛЯТЬ !!!! ПЕРЕДАЕТСЯ В КОМПОНЕНТ СУКА ЧИТАЙ КОДА И НЕ ЛУПИСЬ В ГЛАЗА  */}
        </Route>
      </Switch>

    </div>
  )
}

export default Products;

