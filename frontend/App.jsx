import { useEffect, useState } from 'react';

function App() {
  const [hasProvider, setHasProvider] = useState(false);
  const [account, setAccount] = useState(null);
  const [error, setError] = useState(null);

  // Verifica se o MetaMask está disponível
  useEffect(() => {
    if (typeof window !== 'undefined' && window.ethereum) {
      setHasProvider(true);

      // Listener de mudança de conta
      window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        } else {
          setAccount(null);
        }
      });
    } else {
      setHasProvider(false);
    }
  }, []);

  // Conectar à conta do usuário
  const connectWallet = async () => {
    try {
      if (typeof window !== 'undefined' && window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
      } else {
        setError('MetaMask não encontrado.');
      }
    } catch (err) {
      setError('Erro ao conectar: ' + err.message);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Conectar à MetaMask</h1>

      {!hasProvider ? (
        <p style={{ color: 'red' }}>MetaMask não está instalado. Instale para continuar.</p>
      ) : account ? (
        <p><strong>Conta conectada:</strong> {account}</p>
      ) : (
        <button onClick={connectWallet}>Conectar Wallet</button>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default App;
