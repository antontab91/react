import React from 'react';

const App = () => {
  return (
    <>
      <div className="page">
        <ul className="navigation">
          <li className="navigation__item"><a href="/">Home</a></li>
          <li className="navigation__item"><a href="/users">Users</a></li>
        </ul>


        <div className="page__content">
          <h1>Users</h1>
          <ul className="navigation">
            <li className="navigation__item">
              <a href="/users/github">Github</a>
            </li>
            <li className="navigation__item">
              <a href="/users/facebook">Facebook</a>
            </li>
          </ul>
          <div className="user">
            <img alt="User Avatar" src="https://avatars1.githubusercontent.com/u/9919?v=4" className="user__avatar" />
            <div className="user__info">
              <span className="user__name">GitHub</span>
              <span className="user__location">San Francisco,CA</span>
            </div>
          </div>
        </div>
      </div>

      <div className="page__content">
        <h1>🏠</h1>
      </div>

    </>
  )
}

export default App;