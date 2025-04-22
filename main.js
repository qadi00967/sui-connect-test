import { WalletProvider, WalletConnectButton } from "https://cdn.jsdelivr.net/npm/@mysten/dapp-kit@0.10.1/dist/index.min.js";

const container = document.getElementById("root");

if (container) {
  const { createElement } = React;
  const { createRoot } = ReactDOM;

  const App = () => (
    createElement(WalletProvider, { networks: ["mainnet"] },
      createElement("div", { style: { textAlign: "center" } },
        createElement("h1", null, "Connect Sui Wallet"),
        createElement(WalletConnectButton)
      )
    )
  );

  const root = createRoot(container);
  root.render(createElement(App));
}