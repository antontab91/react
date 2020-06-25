import React from 'react';

const Spinner = ({ size }) => {

    const style = {
        width: `${size}`,
    }

    return (
        <span style={{ style }} class="spinner" ></span >
    )
}

export default Spinner;