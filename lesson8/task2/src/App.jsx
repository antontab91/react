import React from 'react';
import Clock from './Clock.jsx';


const App = () => {
  return (
    <>
      <Clock location={'LONDON'} offset={0} />
      <Clock location={'KYIV'} offset={2} />
      <Clock location={'NEW YORK'} offset={-5} />
    </>
  )
}

export default App;