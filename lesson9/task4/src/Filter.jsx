import React from 'react';

const Filter = (props) => {
  return (
    <div className="filter">
      <span className="filter__count">5</span>
      <input onChange={props.handleChange} type="text" className="filter__input" value={props.value} />
    </div>
  )
}

export default Filter;