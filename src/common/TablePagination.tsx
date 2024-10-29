import { useContext } from "react";
import { PaginationContext } from "../contexts/paginationContext";

const TablePagination: React.FC<{
  totalPages: number;
  currPage: number;
}> = ({ totalPages, currPage }) => {
  const context = useContext(PaginationContext);

  return (
    <div
      data-testid="btnWrapper"
      className="bg-white w-full flex justify-between px-2 py-1"
    >
      <span className="btnWrapper">
        {currPage <= 1 ? (
          " "
        ) : (
          <button
            onClick={() => context?.paginate(currPage - 1)}
            className="paginationBtn"
          >
            ← Previous
          </button>
        )}
      </span>
      <span className="btnWrapper">
        {currPage >= totalPages ? (
          ""
        ) : (
          <button
            onClick={() => context?.paginate(currPage + 1)}
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
