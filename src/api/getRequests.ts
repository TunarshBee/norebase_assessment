import { api } from "./axios";

// Modeled request to get the coins
export const getCoinData = async (page: number) => {
  const response = await api.get(`tickers/?start=${(page - 1) * 10}&limit=10`);
  return response.data;
};

