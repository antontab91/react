import React from 'react';

const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {
  const isPrevPageAvailable = currentPage === 0; // если самая первая страничка 
  const isNextPageAvailable = currentPage === Math.ceil(totalItems / itemsPerPage) - 1; // если последняя страничка 
  console.log(totalItems / itemsPerPage);
  console.log(Math.ceil(totalItems / itemsPerPage) - 1)
  return (
    <div className="pagination">
      <button className="btn">←</button>
      <span className="pagination__page">1</span>
      <button className="btn">→</button>
    </div>
  );
};

export default Pagination;