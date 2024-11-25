import { useTokenMarket } from '@/hooks/useTokenMarket';
import MarketHeader from '@/components/MarketHeader';
import MarketStats from '@/components/MarketStats';
import PriceChart from '@/components/PriceChart';
import OrderBook from '@/components/OrderBook';
import TradeForm from '@/components/TradeForm';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const TOKEN_ADDRESS = '0x...'; // Your token address here

export default function App() {
  const { orders, priceData, createOrder, executeOrder } = useTokenMarket(TOKEN_ADDRESS);
  
  return (
    <div className="min-h-screen bg-background text-foreground p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <MarketHeader />
        <MarketStats priceData={priceData} />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 space-y-6">
            <Card className="border-accent/20">
              <Tabs defaultValue="chart" className="p-6">
                <TabsList className="bg-secondary">
                  <TabsTrigger value="chart">Price Chart</TabsTrigger>
                  <TabsTrigger value="depth">Depth Chart</TabsTrigger>
                </TabsList>
                <TabsContent value="chart" className="h-[400px]">
                  <PriceChart />
                </TabsContent>
                <TabsContent value="depth" className="h-[400px]">
                  <div className="flex items-center justify-center h-full text-muted-foreground">
                    Market depth visualization coming soon
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
            
            <OrderBook orders={orders} onExecuteOrder={executeOrder} />
          </div>

          <div className="lg:col-span-4">
            <TradeForm onCreateOrder={createOrder} />
          </div>
        </div>
      </div>
    </div>
  );
}