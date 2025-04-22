import {
  WalletProvider,
  useWallet,
  WalletModal,
  WalletButton,
} from "https://cdn.jsdelivr.net/npm/@mysten/wallet-kit@0.6.3/+esm";

import React, { useEffect } from "https://esm.sh/react@18";
import { createRoot } from "https://esm.sh/react-dom@18/client";

function App() {
  const { wallets, connect, currentWallet } = useWallet();

  useEffect(() => {
    if (currentWallet) {
      document.getElementById("walletAddress").textContent = currentWallet.accounts[0].address.slice(0, 10) + "...";
    }
  }, [currentWallet]);

  return (
    <div>
      <WalletModal />
      <WalletButton onClick={() => connect()}>
        Connect Wallet
      </WalletButton>
    </div>
  );
}

createRoot(document.getElementById("app")).render(
  <WalletProvider>
    <App />
  </WalletProvider>
);