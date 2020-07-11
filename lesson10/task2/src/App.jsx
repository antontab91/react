import React from 'react';
import ShoppingCart from './ShoppingCart';
import Profile from './Profile';

class App extends React.Component {
  constructor(props) {
    super(props);


  }


  render() {
    return (
      // <div className="main">
      //   <main className="content">
      //     <ShoppingCart />
      //     <Profile />
      //   </main>
      // </div>


      <div className="page">
        <h1 className="title">Hello, John Doe</h1>
        <main className="content">
          <ShoppingCart />
          <Profile />

        </main>
      </div>


    )
  }
}
export default App;