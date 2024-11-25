import { useState, useEffect } from 'react';
import Moralis from 'moralis';
import { useToast } from '@/hooks/use-toast';

export const useWallet = () => {
  const [address, setAddress] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const init = async () => {
      try {
        await Moralis.start({
          apiKey: import.meta.env.VITE_MORALIS_API_KEY
        });
      } catch (error) {
        console.error('Failed to initialize Moralis:', error);
      }
    };
    init();
  }, []);

  const connectWallet = async () => {
    if (!window.ethereum) {
      toast({
        title: "MetaMask not found",
        description: "Please install MetaMask to connect your wallet",
        variant: "destructive"
      });
      return;
    }

    try {
      setIsConnecting(true);
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
      });
      
      setAddress(accounts[0]);
      toast({
        title: "Wallet Connected",
        description: "Successfully connected to MetaMask"
      });
    } catch (error) {
      toast({
        title: "Connection Failed",
        description: "Failed to connect to MetaMask",
        variant: "destructive"
      });
      console.error('Failed to connect wallet:', error);
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = () => {
    setAddress(null);
    toast({
      title: "Wallet Disconnected",
      description: "Your wallet has been disconnected"
    });
  };

  return {
    address,
    isConnecting,
    connectWallet,
    disconnectWallet
  };
};