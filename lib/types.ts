export type TJwtToken = {
  token_type: "access";
  exp: number;
  iat: number;
  jti: string;
  user_id: number;
};

export type TTransaction = {
  sender: number;
  recipient: string;
  amount: number;
  transaction_hash: string;
  status: string;
  timestamp: string;
  block_number: string;
  fee: string;
};

export type TToken = {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    fully_diluted_valuation: number;
    total_volume: number;
    high_24h: number;
    low_24h: number;
    price_change_24h: number;
    price_change_percentage_24h: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    ath: number;
    ath_change_percentage: number;
    ath_date: string;
    atl: number;
    atl_change_percentage: number;
    atl_date: string;
    roi: null | any;
    last_updated: string;
    price_change_percentage_24h_in_currency: number;
  }
  

export type TMarketQueryParams = {
  vs_currency?: string;
  order?: string;
  sparkline?: boolean;
  price_change_percentage?: string;
  search?: string;
};