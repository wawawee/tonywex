import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import type { Order } from '@/types';

interface OrderBookProps {
  orders: Order[];
  onExecuteOrder: (order: Order) => void;
}

export default function OrderBook({ orders, onExecuteOrder }: OrderBookProps) {
  const buyOrders = orders
    .filter(o => o.type === 'BUY')
    .sort((a, b) => Number(b.price) - Number(a.price));

  const sellOrders = orders
    .filter(o => o.type === 'SELL')
    .sort((a, b) => Number(a.price) - Number(b.price));

  return (
    <Card className="p-6 border-accent/20">
      <h2 className="text-xl font-semibold mb-4">Order Book</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Price</span>
            <span>Amount</span>
          </div>
          <ScrollArea className="h-[300px] pr-4">
            {sellOrders.map(order => (
              <div
                key={order.id}
                onClick={() => onExecuteOrder(order)}
                className="flex justify-between p-2 hover:bg-accent/10 cursor-pointer text-red-400 border-l-2 border-transparent hover:border-accent"
              >
                <span>{order.price}</span>
                <span>{order.tokenAmount}</span>
              </div>
            ))}
            <div className="border-t border-b border-accent/20 py-2 my-2 text-center font-semibold text-accent">
              ${orders.length > 0 ? orders[0].price : '0.00'}
            </div>
            {buyOrders.map(order => (
              <div
                key={order.id}
                onClick={() => onExecuteOrder(order)}
                className="flex justify-between p-2 hover:bg-accent/10 cursor-pointer text-green-400 border-l-2 border-transparent hover:border-accent"
              >
                <span>{order.price}</span>
                <span>{order.tokenAmount}</span>
              </div>
            ))}
          </ScrollArea>
        </div>
        
        <div className="border-l border-accent/20 pl-4">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Total</span>
            <span>Sum (USD)</span>
          </div>
          <ScrollArea className="h-[300px]">
            {/* Market depth visualization here */}
          </ScrollArea>
        </div>
      </div>
    </Card>
  );
}