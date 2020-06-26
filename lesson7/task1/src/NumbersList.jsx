import React from 'react';

const NumbersList = ({ numbers }) => {
    const listElems = numbers.map((el) => {
        return <li key={el}>{el}</li>
    })
    return (
        <ul className="">{listElems}</ul>
    )
}

export default NumbersList;