import React from "react";

const Product = ({ match }) => { // хистори , локейшен и меч, тут мы просто меч достали 
  return <div className="product">{match.params.productId}</div>;
};

export default Product;
