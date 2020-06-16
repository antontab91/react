import React from "react";
import ReactDOM, { render } from "react-dom";

const root = document.querySelector('#root');

const element = (
  <>
    <h1>Search Form</h1>
    <div>
      <input type="text" />
      <button>Search</button>
    </div>
  </>
);

ReactDOM.render(element, root);