import React from 'react';

const myAlert = () => {
  alert('Good job!');
};

const GoodButton = () => {
  return (
    <button onClick={myAlert} className='fancy-button'>Click me</button>
  )
}

export default GoodButton;