import { useQuery } from "react-query";
import { getCoinData } from "../api/getRequests";


// This hook fetches coin data for a specific page.
const useCoinData = (page: number) => {
  return useQuery(
    ["coinData", page], 
    async () => {
      const data = await getCoinData(page);
      return data; 
    },
    {
      enabled: page !== 0,
    }
  );
};

export default useCoinData;
