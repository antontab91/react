import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Expand extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true
        };
    }

    toggleContent = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }


    render() {
        const button = this.state.isOpen ?

            <i className="fas fa-chevron-down"></i>
            :
            <i className="fas fa-chevron-up"></i>


        const content = this.state.isOpen ? this.props.children : null

        return (
            <div className="expand border">
                <div className="expand__header">
                    <span className="expand__title">Some title</span>
                    <button onClick={this.toggleContent} className="expand__toggle-btn">
                        {button}
                    </button>
                </div>
                <div className="expand__content">
                    {content}
                </div>
            </div>
        );
    }

}

export default Expand;