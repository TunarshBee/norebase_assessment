import React from "react";
import { IPagination } from '../types/indext';
import { GoArrowLeft, GoArrowRight } from "react-icons/go";


const TablePagination: React.FC<IPagination> = ({ totalPages, currentPage, paginate }) => {

   const handlePaginationChange = (actionType: "increment" | "decrement") => {
     let newPageNumber = currentPage;

     if (actionType === "increment") {
       newPageNumber += 1;
     } else {
       newPageNumber -= 1;
     }

     paginate(newPageNumber);
   };

  return (
    <div
      data-testid="btnWrapper"
      className="bg-white w-full flex justify-between items-center px-2 gap-7 py-1"
    >
      <span className="btnWrapper">
        {currentPage <= 1 ? (
          " "
        ) : (
          <button
            onClick={() => handlePaginationChange("decrement")}
            className="flex items-center gap-1 font-bold transition-all duration-200 text-sm p-[6px] rounded-sm hover:gap-2 hover:bg-[#f2f2f2]"
          >
            <GoArrowLeft className="font-bold" aria-hidden="true" />
            Previous
          </button>
        )}
      </span>
      <span className="btnWrapper">
        {currentPage >= totalPages ? (
          ""
        ) : (
          <button
            onClick={() => handlePaginationChange("increment")}
            className="flex items-center gap-1 font-bold transition-all duration-200 text-sm p-[6px] rounded-sm hover:gap-2 hover:bg-[#f2f2f2]"
          >
            Next
            <GoArrowRight className="font-bold" aria-hidden="true" />
          </button>
        )}
      </span>
    </div>
  );
};

export default TablePagination;
