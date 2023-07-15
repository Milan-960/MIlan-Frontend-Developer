import React from "react";

function Pagination({ currentPage, itemsPerPage, totalItems, onPageChange }) {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center my-8">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`h-12 w-12 mx-1 rounded-full ${
            currentPage === page
              ? "bg-blue-500 text-white"
              : "bg-white text-blue-500"
          } border border-blue-500 flex items-center justify-center`}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
