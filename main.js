import { getWallets } from "https://cdn.jsdelivr.net/npm/@mysten/wallet-standard";

const connectButton = document.getElementById("connectButton");
const walletAddressDisplay = document.getElementById("walletAddress");

connectButton.addEventListener("click", async () => {
  const wallets = getWallets();
  const suiWallets = wallets.filter(w => w.features["sui:connect"]);

  if (suiWallets.length === 0) {
    alert("No Sui-compatible wallets found.");
    return;
  }

  const wallet = suiWallets[0];
  const result = await wallet.features["sui:connect"].connect();
  walletAddressDisplay.innerText = "Connected: " + result.accounts[0].address;
});