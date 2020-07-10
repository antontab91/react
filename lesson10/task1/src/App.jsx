import React from 'react';
import UserMenu from 'UserMenu.jsx';
import UserProfile from 'UserProfile.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page">
        <header className="header">
          {/* <UserMenu /> */}
        </header>
        <UserProfile userId={'github'} />
      </div>
    )
  }
}
export default App;