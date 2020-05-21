import React from "react";
import ReactDom from "react-dom";
import "./styles.css";
import "./styles.scss";


const rootElement = document.querySelector('#root');

const Greeting = () => {
  const element = (
    <div className="search">
      <h1 className="search__title">Hello, Tom. What to search for you?</h1>
      <div className="search__field">
        <input type="text" className="search__input" />
        <button className="search__button">Search</button>
      </div>
    </div>
  );

  return element;
};



ReactDom.render(<Greeting />, rootElement);