import React from "react";
import Dialog from "./Dialog.jsx"

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }

    handleOpen = () => {
        this.setState({
            isOpen: true,
        })
    }

    handleClose = () => {
        this.setState({
            isOpen: false,
        })
    }

    render() {
        const elem = <p>Use immutable array methods to work with data. It will help to avoid bugs</p>;

        return (
            <div className="app" >
                <button onClick={this.handleOpen} className="btn">Show dialog</button>
                <Dialog
                    title="some Text"
                    isOpen={this.state.isOpen}
                    handleClose={this.handleClose}
                >
                    {elem}
                </Dialog>
            </div>
        )
    }
}

export default App;