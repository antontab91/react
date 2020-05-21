import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Comment from "./Comment.jsx";

const rootElement = document.querySelector("#root");

const user = {
  name: "Tom",
  avatarUrl: "https://avatars3.githubusercontent.com/u10001",
};

ReactDOM.render(
  <Comment
    author={user}
    text="Good job"
    date={new Date()}
  />,
  rootElement
);