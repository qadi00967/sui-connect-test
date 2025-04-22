import React from "react";
import { WalletKitProvider, ConnectButton } from "@mysten/wallet-kit";

function App() {
  return (
    <WalletKitProvider>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "5rem" }}>
        <h1 style={{ color: "white" }}>Connect Sui Wallet</h1>
        <ConnectButton />
      </div>
    </WalletKitProvider>
  );
}

export default App;
