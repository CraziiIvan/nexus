import axios from "axios";
import { TMarketQueryParams, TToken } from "../types";

const BASE_URL = "https://api.coingecko.com/api/v3/coins/markets";

type TGetMarketParams = TMarketQueryParams & {
  pageParam?: number;
  per_page?: number;
};

export async function getMarket({
  pageParam = 1,
  per_page = 20,
  vs_currency = "usd",
  price_change_percentage = "24h",
}: TGetMarketParams) {
  try {
    const response = await axios.get<TToken[]>(BASE_URL, {
      params: {
        vs_currency,
        price_change_percentage,
        page: pageParam,
        per_page: per_page,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
