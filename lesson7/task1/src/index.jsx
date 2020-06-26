import React from 'react';
import ReactDOM from 'react-dom';
import NumbersList from './NumbersList.jsx';


const root = document.querySelector('#root');

ReactDOM.render(<NumbersList numbers={[1, 2, 3, 4, 5, 6]} />, root);