// @flow

type Price = {
  price: number,
  volume_24h: number,
  percent_change_1h: number,
  percent_change_24h: number,
  percent_change_7d: number,
  percent_change_30d: number,
  percent_change_60d: number,
  percent_change_90d: number,
  market_cap: number,
  last_updated: String,
};

type Quote = {
    [key: string]: Price,
}


export type CoinMarketCapData = {
  id: number,
  name: string,
  symbol: string,
  slug: string,
  date_added: string,
  tag?: any,
  max_supply: number,
  circulating_supply: number,
  total_supply: number,
  platform: any,
  cmc_rank: number,
  last_updated: string,
  quote?: Quote,
};
