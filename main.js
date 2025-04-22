
import { getWallets } from "https://cdn.jsdelivr.net/npm/@mysten/wallet-standard@latest";

const connectButton = document.getElementById("connectButton");
const walletAddressText = document.getElementById("walletAddress");

connectButton.addEventListener("click", async () => {
    const wallets = getWallets();
    const available = wallets.get();

    if (!available.length) {
        alert("No Sui wallets found. Please install a wallet extension.");
        return;
    }

    const wallet = available[0]; // نختار أول محفظة
    await wallet.features["standard:connect"].connect();
    const accounts = await wallet.features["sui:accounts"].getAccounts();

    walletAddressText.textContent = accounts[0].address || "No address found";
});
