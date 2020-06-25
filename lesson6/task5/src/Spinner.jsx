import React from 'react';

const Spinner = ({ size }) => {

    const style = {
        width: `${size}`,
    }

    return (
        <span style={{ style }} className="spinner" ></span >
    )
}

export default Spinner;