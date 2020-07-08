import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
  }

  handleChange = (e) => {
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
      <form onSubmit={this.allertText} className="search" >
        <input onChange={this.handleChange} value={this.state.value} type="text" className="search__input" />
        <button className="search__button">Search</button>
      </form>
    )
  }
}

export default Search;