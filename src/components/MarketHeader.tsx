import { Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useWallet } from '@/hooks/useWallet';
import { shortenAddress } from '@/lib/utils';

export default function MarketHeader() {
  const { address, isConnecting, connectWallet, disconnectWallet } = useWallet();

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
      <div>
        <h1 className="text-3xl font-bold">TOKEN/STOCK</h1>
        <p className="text-muted-foreground">Trade tokens for stocks seamlessly</p>
      </div>
      {address ? (
        <Button 
          variant="outline" 
          className="gap-2 border-accent hover:bg-accent/10 hover:text-accent"
          onClick={disconnectWallet}
        >
          <Wallet className="w-4 h-4" />
          {shortenAddress(address)}
        </Button>
      ) : (
        <Button 
          variant="outline" 
          className="gap-2 border-accent hover:bg-accent/10 hover:text-accent"
          onClick={connectWallet}
          disabled={isConnecting}
        >
          <Wallet className="w-4 h-4" />
          {isConnecting ? 'Connecting...' : 'Connect Wallet'}
        </Button>
      )}
    </div>
  );
}