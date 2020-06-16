import React from "react";
import ReactDOM from "react-dom";
import './styles.css';

const root = document.querySelector('#root');

const renderSeconds = time => {
  const seconds = new Date().getSeconds();

  const textColor = seconds % 2 === 0
    ? "#000"
    : "#fff";
  const background = seconds % 2 === 0
    ? "#fff"
    : "#000";

  const style = {
    color: textColor,
    backgroundColor: background,
  }

  const element = (
    <div
      className='seconds'
      style={style}
    >
      {seconds}
    </div>
  );

  ReactDOM.render(element, root);
}


setInterval(() => {
  renderSeconds();
}, 1000)
