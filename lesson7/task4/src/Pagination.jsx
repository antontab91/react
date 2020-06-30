import React from 'react';

const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {
  const isPrevPageAvailable = currentPage === 0;
  const isNextPageAvailable = currentPage === Math.ceil(totalItems / itemsPerPage) - 1;
  return (
    <div className="pagination">ыффы</div>
  );
};

export default Pagination;