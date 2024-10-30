import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import TablePagination from "./TablePagination";
import CoinRow from "./CoinRow";
import { ITableProps } from "../types/indext";

const Table: React.FC<ITableProps> = ({
  header,
  data,
  isLoadingData,
  totalPages,
  currentPage,
  onPageChange
}) => {
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
            <tbody data-testid="skeleton" className="min-w-fit">
              {loadingStateSkeletonRow.map((_item, index) => (
                <tr key={index} className="min-w-[350px]">
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
          totalPages={totalPages}
          currPage={currentPage ?? 1}
          paginate={onPageChange}
        />
      )}
    </div>
  );
};

export default Table;
