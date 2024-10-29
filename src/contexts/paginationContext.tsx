import { createContext, useState } from "react";
import { IPagination } from "../types/indext";

const PaginationContext = createContext<IPagination | null>(null);

const PaginationProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const value = {
    currentPage,
    paginate,
  };

  return (
    <PaginationContext.Provider value={value}>
      {children}
    </PaginationContext.Provider>
  );
};

export { PaginationProvider, PaginationContext };
