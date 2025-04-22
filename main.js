import {
  WalletKitProvider,
  WalletKitButton,
  createWalletKitCore,
  getWallets,
  SuiWallet
} from "https://cdn.jsdelivr.net/npm/@mysten/wallet-kit@0.10.7/dist/index.module.js";

const { connect, currentAccount, wallets } = createWalletKitCore({
  wallets: [new SuiWallet()],
});

document.getElementById("connectButton").addEventListener("click", async () => {
  try {
    const account = await connect();
    document.getElementById("walletAddress").textContent = 
      account?.address.slice(0, 6) + "..." + account?.address.slice(-4);
  } catch (e) {
    alert("Failed to connect: " + e.message);
  }
});