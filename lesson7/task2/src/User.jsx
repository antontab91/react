import React from 'react';

const User = ({ name, age }) => {
    return (
        <li className='user'>
            <span className='name'>{name}</span>
            <span className='age'>{age}</span>
        </li>
    )
}

export default User;