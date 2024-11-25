import { AreaChart, Wallet, ArrowUpDown } from 'lucide-react';
import { Card } from '@/components/ui/card';
import type { PriceData } from '@/types';

interface MarketStatsProps {
  priceData: PriceData;
}

export default function MarketStats({ priceData }: MarketStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <Card className="p-6 border-accent/20">
        <div className="flex items-center gap-2">
          <AreaChart className="w-5 h-5 text-accent" />
          <h3 className="font-semibold">Price</h3>
        </div>
        <p className="text-3xl font-bold mt-2">${priceData.price}</p>
        <p className={`text-sm ${Number(priceData.change24h) >= 0 ? 'text-green-400' : 'text-red-400'}`}>
          {priceData.change24h}% (24h)
        </p>
      </Card>
      
      <Card className="p-6 border-accent/20">
        <div className="flex items-center gap-2">
          <ArrowUpDown className="w-5 h-5 text-accent" />
          <h3 className="font-semibold">Volume 24h</h3>
        </div>
        <p className="text-3xl font-bold mt-2">${priceData.volume24h}</p>
        <p className="text-sm text-muted-foreground">Total trading volume</p>
      </Card>
      
      <Card className="p-6 border-accent/20">
        <div className="flex items-center gap-2">
          <Wallet className="w-5 h-5 text-accent" />
          <h3 className="font-semibold">Your Balance</h3>
        </div>
        <p className="text-3xl font-bold mt-2">0.00 TOKEN</p>
        <p className="text-sm text-muted-foreground">≈ $0.00 USD</p>
      </Card>
    </div>
  );
}