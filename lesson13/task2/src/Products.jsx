import React from 'react';

const Products = () => {
  return (
    <div className="page__content">
      <h1>Products</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <a href="/products/book">Book</a>
        </li>
        <li className="navigation__item">
          <a href="/products/ball">Ball</a>
        </li>
      </ul>


    </div>
  )
}

export default Products;