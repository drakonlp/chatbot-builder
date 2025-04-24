import { useEffect, useState } from 'react';

function App() {
  const [hasProvider, setHasProvider] = useState(false);
  const [account, setAccount] = useState(null);
  const [error, setError] = useState(null);

  // Verifica se há provider Ethereum (MetaMask, etc.)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.ethereum) {
      setHasProvider(true);

      // Atualiza conta se o usuário trocar na MetaMask
      window.ethereum.on('accountsChanged', (accounts) => {
        setAccount(accounts.length > 0 ? accounts[0] : null);
      });
    } else {
      setHasProvider(false);
    }

    // Cleanup do listener
    return () => {
      if (window.ethereum?.removeListener) {
        window.ethereum.removeListener('accountsChanged', () => {});
      }
    };
  }, []);

  // Função para conectar a carteira
  const connectWallet = async () => {
    if (typeof window !== 'undefined' && window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        setError(null);
      } catch (err) {
        setError('Erro ao conectar: ' + (err?.message || 'Desconhecido'));
      }
    } else {
      setError('MetaMask não está disponível neste navegador.');
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Chatbot Web3 – Conectar à MetaMask</h1>

      {!hasProvider ? (
        <p style={{ color: 'red' }}>MetaMask não está instalado. Instale para continuar.</p>
      ) : account ? (
        <p><strong>Conta conectada:</strong> {account}</p>
      ) : (
        <button onClick={connectWallet} style={{ padding: '0.5rem 1rem' }}>
          Conectar Wallet
        </button>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default App;
