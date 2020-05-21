import React from "react";
import ReactDom from "react-dom";
import "./styles.css";
import Search from "./Search.jsx";



const rootElement = document.querySelector('#root');



ReactDom.render(<Search name="Antony" />, rootElement);