
export function getWallets() {
  if (!window.navigator?.suiWallet) return [];
  return [window.navigator.suiWallet];
}
