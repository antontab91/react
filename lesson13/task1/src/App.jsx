import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./Home";
import Products from "./Products";
import Contacts from "./Contacts";
import PageNotFound from "./PageNotFound";



const App = () => {
  return (
    <div className="page">
      <BrowserRouter>
        <Switch>
          <Route>
            <Home exact path='/' />
          </Route>
          <Route>
            <Products path='/Products' />
          </Route>
          <Route>
            <Contacts path='/Contacts' />
          </Route>
          <Route>
            <PageNotFound path='/PageNotFound' />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  )
}

export default App;