import React from "react";

class OddNumbers extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            < div className="number" >
                <span className="number__title">{this.props.title}</span>
                <span className="number__value">{this.props.number}</span>
            </div >
        )
    }
}

export default OddNumbers;