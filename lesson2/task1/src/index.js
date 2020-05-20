import React from "react";
import ReactDom from "react-dom";


const rootElement = document.querySelector('#root');

const element = (
  <>
    <h1>Search Form</h1>
    <div>
      <input type="text" />
      <button>Search</button>
    </div>
  </>
);

ReactDom.render(element, rootElement);