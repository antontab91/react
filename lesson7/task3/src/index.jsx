import React from "react";
import ReactDOM from 'react-dom';
import './index.scss';


const transactions = [
  {
    id: "id-0",
    from: "USD",
    to: "EUR",
    amount: 1200,
    rate: 0.8,
    time: "2019-01-10T17:08:35.447Z",
  },
  {
    id: "id-1",
    from: "USD",
    to: "UAH",
    amount: 100000,
    rate: 25.7,
    time: "2019-01-10T18:22:35.447Z",
  },
  {
    id: "id-2",
    from: "EUR",
    to: "USD",
    amount: 100,
    rate: 1.1,
    time: "2019-01-10T17:01:35.447Z",
  },
];

const element = transactions.map(({ id, from, to, amount, rate, time }) => {

  return (

    <li className='transaction'>
      <span className="transaction__date">{id}</span>
      <span className="transaction__time">{from}</span>
      <span className="transaction__assets">{to}</span>
      <span className="transaction__rate">{amount}</span>
      <span className="transaction__amount">{rate}</span>
    </li>

  )
})


const root = document.querySelector('#root');

ReactDOM.render(element, root)