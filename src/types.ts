export interface Order {
  id: string;
  maker: string;
  tokenAmount: string;
  stockAmount: string;
  price: string;
  type: 'BUY' | 'SELL';
  timestamp: number;
}

export interface PriceData {
  price: string;
  change24h: string;
  volume24h: string;
}