import { useMemo } from 'react';
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from 'recharts';
import { Card } from '@/components/ui/card';

const generateDummyData = () => {
  const now = new Date();
  const data = [];
  for (let i = 0; i < 24; i++) {
    const time = new Date(now.getTime() - (24 - i) * 3600000);
    data.push({
      time: time.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit'
      }),
      price: 100 + Math.random() * 50
    });
  }
  return data;
};

export default function PriceChart() {
  const data = useMemo(() => generateDummyData(), []);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted-foreground))" opacity={0.2} />
        <XAxis 
          dataKey="time"
          stroke="hsl(var(--muted-foreground))"
          tick={{ fill: 'hsl(var(--muted-foreground))' }}
          tickLine={{ stroke: 'hsl(var(--muted-foreground))' }}
        />
        <YAxis
          stroke="hsl(var(--muted-foreground))"
          tick={{ fill: 'hsl(var(--muted-foreground))' }}
          tickLine={{ stroke: 'hsl(var(--muted-foreground))' }}
          domain={['dataMin - 10', 'dataMax + 10']}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: 'hsl(var(--background))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '6px'
          }}
          labelStyle={{ color: 'hsl(var(--foreground))' }}
        />
        <Line 
          type="monotone" 
          dataKey="price" 
          stroke="hsl(var(--primary))" 
          strokeWidth={2}
          dot={false}
          activeDot={{ 
            r: 4, 
            stroke: 'hsl(var(--background))',
            strokeWidth: 2
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}