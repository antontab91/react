import React from 'react';

const CartTitle = ({ firstName, count }) => {
  return (
    <div className="cart-title">{`${firstName}, you added ${count} items`}</div>
  )
}

export default CartTitle;