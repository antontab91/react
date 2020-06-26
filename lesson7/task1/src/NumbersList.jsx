import React from 'react';

const NumbersList = ({ arr }) => {
    const listElems = arr.map((el) => {
        return <li key={el}>{el}</li>
    })
    return (
        <ul className="">{listElems}</ul>
    )
}

export default NumbersList;