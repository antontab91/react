import React from "react";
import Dialog from "./Dialog.jsx"

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }

    hideDialog = () => {
        this.setState({
            isOpen: false,
        });
    };

    showDialog = () => {
        this.setState({
            isOpen: true,
        });
    };

    render() {
        const elem = <p>Use immutable array methods to work with data. It will help to avoid bugs</p>;

        return (
            <div className="app" >
                <button onClick={this.showDialog} className="btn">Show dialog</button>
                <Dialog
                    title="some Text"
                    isOpen={this.state.isOpen}
                    onClose={this.hideDialog}
                >
                    {elem}
                </Dialog>
            </div>
        )
    }
}

export default App;