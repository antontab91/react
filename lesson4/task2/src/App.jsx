import React from 'react';
import Clock from './Clock.jsx';


const App = () => {
  return (
    <>
      <Clock location={'NEW YORK'} offset={-4} />
      <Clock location={'KYIV'} offset={3} />
      <Clock location={'LONDON'} offset={1} />
    </>
  )
}

export default App;