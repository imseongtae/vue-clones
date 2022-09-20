import { instance } from './index';

export function getCoinsList() {
  const url =
    'v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
  return instance.get(url);
}
