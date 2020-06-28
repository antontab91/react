import moment from "moment";
import React from "react";


const formatDate = date => moment(date).format("hh:mm");
const formatter = new Intl.NumberFormat('en-GB')

// const num = 1200;
// console.log(formatter.format(num))
// console.log(formatDate(new Date()))