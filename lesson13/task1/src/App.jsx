import React from "react";
import Home from "./Home";
import Products from "./Products";
import Contacts from "./Contacts";
import PageNotFound from "./PageNotFound";


const App = () => {
  return (
    <div className="page">

      <Home />
      <Products />
      <Contacts />
      <PageNotFound />

    </div>
  )
}

export default App;