import React from 'react';
import Counter from './Counter.jsx';

const App = () => {
    return (
        <>
            <Counter start={1} interval={1000} />
            <Counter start={null} interval={2000} />
            <Counter start={50} interval={null} />
        </>

    )
}

export default App;
