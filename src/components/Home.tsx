import { useContext } from "react";
import Table from "../common";
import { PaginationContext } from "../contexts/paginationContext";
import useCoinData from "../hooks/useCoinData";

const Home = () => {
  const context = useContext(PaginationContext);

  const { data, isLoading, error } = useCoinData(
    context?.currentPage ?? 1
  );

  //   if (error) return:- 
  if (error) return <div>An Error occured, please try again</div>;

  
  return (
      <Table
        header={["💰Coin", "📄Code", "🤑Price", "📉Total Supply"]}
        data={data && data.data}
        isLoadingData={isLoading}
        totalPages={data && data.info.coins_num}
      />

  );
};

export default Home;
