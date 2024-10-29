export interface IPagination {
  currentPage: number;
  paginate: (page: number) => void;
}

export interface ITableProps {
  header: string[];
  data: { [key: string]: string }[];
  isLoadingData: boolean;
  totalPages: number;
}