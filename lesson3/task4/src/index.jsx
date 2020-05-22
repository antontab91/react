import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./Greeting.jsx";
import "./index.scss";


const rootElem = document.querySelector("#root");

const user = {
  firstName: 'Jon',
  lastName: 'Dou',
  birthDate: new Date('2001-01-01T11:11:11.819Z'),
};


ReactDOM.render(
  <Greeting
    firstName={user.firstName}
    lastName={user.lastName}
    birthDate={user.birthDate}}
  />,
  rootElem
)