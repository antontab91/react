import React from 'react';
import Message from './Message.jsx';

const text1 = 'Hello, world!';
const text2 = 'Another exciting text.';

class Page extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ''
    };

    this.setHelloText = this.setHelloText.bind(this);
    this.setAnotherText = this.setAnotherText.bind(this);
    this.resetText = this.resetText.bind(this);
  }

  setHelloText() {
    this.setState({
      text: text1,
    });
  }

  setAnotherText() {
    this.setState({
      text: text2,
    });
  }

  resetText() {
    this.setState({
      text: '',
    });
  }

  render() {
    return (
      <div>
        <Message text={this.state.text} />
        <div>
          <button onClick={this.setHelloText} className="btn"></button>
          <button onClick={this.setAnotherText} className="btn"></button>
          <button onClick={this.resetText} className="btn"></button>
        </div>
      </div>
    )
  }
}

export default Page;