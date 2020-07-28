import React from 'react';

const App = () => {
  return (
    <div className="page">
      <ul className="navigation">
        <li className="navigation__item">
          <a href="/">Home</a>
        </li>
        <li className="navigation__item">
          <a href="/products">Products</a>
        </li>
      </ul>

      {/* <!-- Home --> */}
      <div className="page__content">
        <h1>🏠</h1>
      </div>

      {/* <!-- Products --> */}
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

        {/* <!-- Product --> */}
        <div className="product">ball</div>
      </div>
    </div>
  )
}

export default App;