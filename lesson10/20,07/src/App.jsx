import React from 'react';
const App = () => {
  return (
    <div className="page">
      <ul className="navigation">
        <li className="navigation__item">
          <a href="/">Home</a>
        </li>
        <li className="navigation__item">
          <a href="/users">Users</a>
        </li>
      </ul>
    </div>
  );
};
export default App;