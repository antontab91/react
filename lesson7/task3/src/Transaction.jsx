import React from "react";
import moment from "moment";


const formatDate1 = date => moment(date).format("DD MMM");
const formatDate2 = date => moment(date).format("hh:mm");
const formatter = new Intl.NumberFormat('en-GB');

// const num = 1200;
// console.log(formatter.format(num))
// console.log(formatDate1(new Date()))

const Transaction = ({ from, to, amount, rate, time }) => {
  return (
    <li className="transaction">
      <span className="transaction__date">{formatDate1(new Date(time))}</span>
      <span className="transaction__time">{formatDate2(new Date(time))}</span>
      <span className="transaction__assets">{`${from} → ${to}`}</span>
      <span className="transaction__rate">{rate}</span>
      <span className="transaction__amount">{formatter.format(amount)}</span>
    </li>
  )
}

export default Transaction;