import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList.jsx'

const root = document.querySelector('#root');

const users = [
  {
    id: 'id-0',
    name: 'Ejik',
    age: 3,
  },
  {
    id: 'id-1',
    name: 'Kotik',
    age: 4,
  },
  {
    id: 'id-2',
    name: 'Mishka',
    age: 2
  },
  {
    id: 'id-3',
    name: 'Tigrik',
    age: 1
  },
  {
    id: 'id-4',
    name: 'Voron',
    age: 85
  },
  {
    id: 'id-5',
    name: 'Pesik',
    age: 8
  },
  {
    id: 'id-6',
    name: 'Pitonchik',

    age: 6
  },
  {
    id: 'id-7',
    name: 'Yaguarchik',
    age: 14
  },
  {
    id: 'id-8',
    name: 'Ptichka',
    age: 20
  },
];

ReactDOM.render(<UsersList users={users} />, root);