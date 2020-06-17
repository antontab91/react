import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Comment from './Comment.jsx';

const root = document.querySelector("#root");

const user = {
  avatarUrl: 'https://www.sololearn.com/Icons/Avatars/4604247.jpg',
  name: "Tom",
}

ReactDOM.render(<Comment user={user} text="Good job!" date={new Date()} />, root)