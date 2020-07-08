import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
  }

  handleChnge = (e) => {
    let value = e.target.value;
    console.log(value)
    this.setState({
      value,
    })
  }

  allertText = () => {
    alert(`Search text: ${this.state.value}`)
  }

  render() {
    return (
      <form className="search" >
        <input onChange={this.handleChnge} value={this.state.value} type="text" className="search__input" />
        <button onClick={this.allertText} className="search__button">Search</button>
      </form>
    )
  }
}

export default Search;