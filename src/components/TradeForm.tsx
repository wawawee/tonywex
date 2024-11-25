import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { Order } from '@/types';

interface TradeFormProps {
  onCreateOrder: (type: Order['type'], tokenAmount: string, stockAmount: string) => void;
}

export default function TradeForm({ onCreateOrder }: TradeFormProps) {
  const [tokenAmount, setTokenAmount] = useState('');
  const [stockAmount, setStockAmount] = useState('');

  const handleSubmit = (type: Order['type']) => {
    onCreateOrder(type, tokenAmount, stockAmount);
    setTokenAmount('');
    setStockAmount('');
  };

  return (
    <Card className="p-6 border-accent/20">
      <Tabs defaultValue="buy" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-secondary">
          <TabsTrigger value="buy">Buy</TabsTrigger>
          <TabsTrigger value="sell">Sell</TabsTrigger>
        </TabsList>
        
        <div className="mt-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="tokenAmount">Token Amount</Label>
            <Input
              id="tokenAmount"
              type="number"
              placeholder="0.00"
              value={tokenAmount}
              onChange={(e) => setTokenAmount(e.target.value)}
              className="bg-secondary border-accent/20"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="stockAmount">Stock Amount</Label>
            <Input
              id="stockAmount"
              type="number"
              placeholder="0.00"
              value={stockAmount}
              onChange={(e) => setStockAmount(e.target.value)}
              className="bg-secondary border-accent/20"
            />
          </div>

          <TabsContent value="buy" className="mt-4">
            <Button 
              className="w-full bg-accent hover:bg-accent/90"
              onClick={() => handleSubmit('BUY')}
            >
              Place Buy Order
            </Button>
          </TabsContent>
          
          <TabsContent value="sell" className="mt-4">
            <Button 
              className="w-full bg-accent hover:bg-accent/90"
              onClick={() => handleSubmit('SELL')}
            >
              Place Sell Order
            </Button>
          </TabsContent>
        </div>
      </Tabs>
    </Card>
  );
}