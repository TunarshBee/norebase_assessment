export interface IPagination {
  totalPages: number;
  currentPage: number;
  paginate: (page: number) => void;
}

export interface ITableProps {
  header: string[];
  data: { [key: string]: string }[];
  isLoadingData: boolean;
  totalPages: number;
  onPageChange: (page: number) => void;
  currentPage: number;
}