import { useContext } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import TablePagination from "./TablePagination";
import CoinRow from "./CoinRow";
import { PaginationContext } from "../contexts/paginationContext";
import { ITableProps } from "../types/indext";

const Table: React.FC<ITableProps> = ({
  header,
  data,
  isLoadingData,
  totalPages,
}) => {

  // Pagination context hook
  const context = useContext(PaginationContext);
  const loadingStateSkeletonRow = new Array(10).fill(null);


  return (
    <div className="tableContainer">
      <div className="w-full">
        <table className="w-full">
          <thead className="bg-white hidden lg:block">
            <tr className="text-sm font-bold">
              {header.map((item, index) => (
                <td key={item + index}>{item}</td>
              ))}
            </tr>
          </thead>
          {isLoadingData ? (
            <tbody className="min-w-fit">
              {loadingStateSkeletonRow.map((_item, index) => (
                <tr key={index} className="min-w-[250px]">
                  {header.map((_item, index) => (
                    <td key={index}>
                      <Skeleton height="20px" width="70%" />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              {data.map((item, index) => (
                <CoinRow
                  header={header}
                  key={index}
                  itemIdx={index}
                  data={item}
                />
              ))}
            </tbody>
          )}
        </table>
      </div>

      {!isLoadingData && (
        <TablePagination
          totalPages={Math.ceil(totalPages / 10)}
          currPage={context?.currentPage ?? 1}
        />
      )}
    </div>
  );
};

export default Table;
