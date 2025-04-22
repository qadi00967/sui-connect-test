
import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom/client";
import { WalletKitProvider, ConnectButton } from "https://esm.sh/@mysten/wallet-kit";

const App = () => {
  return (
    <WalletKitProvider>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '5rem'
      }}>
        <h1 style={{ color: 'white' }}>Connect Sui Wallet</h1>
        <ConnectButton />
      </div>
    </WalletKitProvider>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
