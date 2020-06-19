import React from 'react';

class GoodButton extends React.Component {

    myAlert(event) {
        alert(event.target.textContent);
    }

    render() {
        return (
            <button onClick={this.myAlert} className="fancy-button">Click me!</button>
        )
    }
}
export default GoodButton;

