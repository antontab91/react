import React from 'react';

const CartTitle = ({ name, count }) => {
  return (
    <div className="cart-title">{`${name}, you added ${count} items`}</div>
  )
}

export default CartTitle;