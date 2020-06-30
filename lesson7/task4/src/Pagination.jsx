import React from 'react';

const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {
  const isPrevPageAvailable = currentPage === 0;
  const isNextPageAvailable = currentPage === Math.ceil(totalItems / itemsPerPage) - 1;
  console.log(totalItems / itemsPerPage);
  console.log(Math.ceil(totalItems / itemsPerPage) - 1)
  return (
    <div className="pagination">


    </div>
  );
};

export default Pagination;