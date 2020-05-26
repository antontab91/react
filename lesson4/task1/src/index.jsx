import React from 'react';
import ReactDOM from 'react-dom';
import "./index.scss";
import App from './App.jsx';




const rootElement = document.querySelector("#root");

// const element = React.createElement(
//   'div',
//   { className: 'greeting' },
//   'Hello, React!'
// );


ReactDOM.render(<App />, rootElement);