import React from "react";

const TablePagination: React.FC<{
  totalPages: number;
  currPage: number;
  paginate: (pageNumber: number) => void;
}> = ({ totalPages, currPage, paginate }) => {
  return (
    <div
      data-testid="btnWrapper"
      className="bg-white w-full flex justify-between items-center px-2 gap-7 py-1"
    >
      <span className="btnWrapper">
        {currPage <= 1 ? (
          " "
        ) : (
          <button
            onClick={() => paginate(currPage - 1)}
            className="paginationBtn"
          >
            ← Previous
          </button>
        )}
      </span>
      <span className="text-sm font-bold text-gray-700">
        Page {currPage} of {totalPages}
      </span>
      <span className="btnWrapper">
        {currPage >= totalPages ? (
          ""
        ) : (
          <button
            onClick={() => paginate(currPage + 1)}
            className="paginationBtn"
          >
            Next →
          </button>
        )}
      </span>
    </div>
  );
};

export default TablePagination;
