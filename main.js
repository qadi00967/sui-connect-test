
import {
  getWallets,
  WalletProvider,
} from "https://unpkg.com/@mysten/wallet-standard@latest/dist/index.js";

const button = document.getElementById('connectButton');
const addressEl = document.getElementById('walletAddress');

button.addEventListener('click', async () => {
  const wallets = getWallets();
  if (!wallets.length) {
    alert('No Sui wallet detected. Please install one (like Sui Wallet or Martian).');
    return;
  }

  const wallet = wallets[0];

  try {
    const account = await wallet.features['standard:connect'].connect();
    addressEl.textContent = 'Connected Wallet: ' + account.accounts[0].address;
  } catch (err) {
    alert('Connection failed: ' + err.message);
  }
});
