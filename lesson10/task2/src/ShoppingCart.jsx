import React from 'react';
import CartTitle from './CartTitle.jsx';
import ProductList from './ProductsList.jsx';


class ShoppingCart extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cartItems: [
        {
          id: "1",
          name: "iPhone 11",
          price: 999,
        },
        {
          id: "2",
          name: "iPad Pro",
          price: 799,
        },
      ],
    }
  }

  render() {
    return (
      <div className="column">
        <CartTitle firstName={this.props.userData.firstName} count={this.state.cartItems.length} />
        <ProductList cartItems={this.state.cartItems} />
      </div>
    )
  }
}

export default ShoppingCart;