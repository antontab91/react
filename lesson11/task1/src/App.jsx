import React from "react";
import Numbers from "./Numbers.jsx"
import OddNumbers from "./OddNumbers.jsx"
import EvenNumbers from "./EvenNumbers.jsx"

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            number: 0,
        }
    }

    render() {
        return (
            <div className="app">
                {/* <!-- OddNumbers --> */}
                <OddNumbers title="All numbers" number={this.state.number} />

                {/* <!-- EvenNumbers --> */}
                <EvenNumbers title="All numbers" number={this.state.number} />
                {/* <!-- Numbers --> */}
                <Numbers title="All numbers" number={this.state.number} />

                {/* <!-- Numbers --> */}
                <Numbers title="All numbers" number={this.state.number} />

            </div>
        )
    }
}

export default App;