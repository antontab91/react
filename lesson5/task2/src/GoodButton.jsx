import React from 'react';

const myAlert = (event) => {
    alert(event.target.textContent)
}

class GoodButton extends React.Component {
    render() {
        return (
            <button onClick={myAlert} className="fancy-button">Click me</button>
        )
    }
}
export default GoodButton;