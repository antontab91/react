import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Products from "./Products";
import Home from "./Home";

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
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products" component={Products} >
            {/* // если это ментор читает - я сам себе написал  БЛЯ АНТОХА ВСЮ НОЧЬ ОТМУЧАЛСЯ ВТЫКНУЛ ПИЗДА ТУТ НЕ ХУЯ НЕ ПЕРЕДАЕТСЯ БЛЯТЬ !!!! ПЕРЕДАЕТСЯ В КОМПОНЕНТ СУКА ЧИТАЙ КОДА И НЕ ЛУПИСЬ В ГЛАЗА  */}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
