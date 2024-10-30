import { useEffect, useState } from "react";
import Table from "../common";
import useCoinData from "../hooks/useCoinData";

const Home = () => {
  // Initialize currentPage from localStorage or set it to 1 if not available
  const [currPage, setCurrPage] = useState<number>(
    parseInt(localStorage.getItem("currentPage") || "1", 10)
  );

  const { data, isLoading, error } = useCoinData(currPage);
  useEffect(() => {
    // Update currPage based on localStorage when the component mounts
    const savedPage = parseInt(localStorage.getItem("currentPage") || "1", 10);
    if (savedPage !== currPage) {
      setCurrPage(savedPage);
    }
  }, [currPage]);


  // Handle pagination and save to localStorage
  const handlePageChange = (newPage: number) => {
    setCurrPage(newPage);
    localStorage.setItem("currentPage", String(newPage));
  };

  if (error) return <div>An Error occurred, please try again</div>;

  return (
    <Table
      header={["💰Coin", "📄Code", "🤑Price", "📉Total Supply"]}
      data={data && data.data}
      isLoadingData={isLoading}
      totalPages={data && Math.round(data.info.coins_num / 10)}
      onPageChange={handlePageChange}
      currentPage={currPage}
    />
  );
};

export default Home;
