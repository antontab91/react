import React from 'react';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const listItem = this.props.cartItems.map(({ name, price, id }) => {
      return (
        <li key={id} className="products__list-item">
          <span className="products__item-name">{name}</span>
          <span className="products__item-price">{price}</span>
        </li>
      )
    })

    const total = this.props.cartItems.reduce((acc, el) => {
      return acc + el.price;
    }, 0)

    return (
      <div className="products" >
        <ul className="products__list">
          {listItem}
        </ul>
        <div className="products__total">{`Total: ${total}`}</div>
      </div>
    )
  }
}

export default ProductList;