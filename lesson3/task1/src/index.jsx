import React from "react";
import ReactDom from "react-dom";
import "./styles.css";
import { SearchField } from "./Search.jsx";



const rootElement = document.querySelector('#root');



ReactDom.render(<SearchField name="Antony" />, rootElement);