import React from 'react';
import CartTitle from './CartTitle.jsx';
import ProductList from './ProductsList.jsx';


class ShoppingCart extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="column">

        <CartTitle />
        <ProductList />

      </div>
    )
  }
}

export default ShoppingCart;