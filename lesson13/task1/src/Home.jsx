import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page__content">
      <h1>🏠</h1>
      <Link to="/Products">To products</Link>
    </div>
  );
}

export default Home;
