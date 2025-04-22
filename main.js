import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom/client";
import { ConnectButton, WalletProvider, SuiClientProvider } from "https://esm.sh/@mysten/dapp-kit";
import { QueryClient, QueryClientProvider } from "https://esm.sh/@tanstack/react-query";
import { getFullnodeUrl } from "https://esm.sh/@mysten/sui/client";

const queryClient = new QueryClient();
const networks = {
  mainnet: { url: getFullnodeUrl("mainnet") },
};

const App = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ color: 'white' }}>Connect Sui Wallet</h1>
      <ConnectButton />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <SuiClientProvider networks={networks} defaultNetwork="mainnet">
      <WalletProvider>
        <App />
      </WalletProvider>
    </SuiClientProvider>
  </QueryClientProvider>
);