import { getWallets, isWalletInstalled } from 'https://cdn.jsdelivr.net/npm/@mysten/wallet-standard@latest';

const connectButton = document.getElementById('connectButton');
const walletAddressEl = document.getElementById('walletAddress');

connectButton.addEventListener('click', async () => {
  const wallets = getWallets();
  const suiWallet = wallets.find(wallet => wallet.name === 'Sui Wallet' || wallet.features['sui:connect']);

  if (!suiWallet) {
    alert('Sui Wallet not found!');
    return;
  }

  try {
    const response = await suiWallet.features['standard:connect'].connect();
    const address = response.accounts?.[0]?.address || '(No Address)';
    walletAddressEl.innerText = 'Connected: ' + address.slice(0, 6) + '...' + address.slice(-4);
    connectButton.style.display = 'none';
  } catch (error) {
    alert('Failed to connect: ' + error.message);
  }
});
