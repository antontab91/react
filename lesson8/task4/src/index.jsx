import React from 'react';
import ReactDOM from 'react-dom';
import User from './User.jsx';
import './index.scss';

const root = document.querySelector('#root');

ReactDOM.render(<User userId={'facebook'} />, root);