import React, { useState } from 'react';

export default function ChatbotBuilder() {
  const [blocos, setBlocos] = useState([]);

  const adicionarBloco = () => {
    const novoBloco = {
      id: blocos.length + 1,
      tipo: 'mensagem',
      conteudo: `Bloco ${blocos.length + 1}`
    };
    setBlocos([...blocos, novoBloco]);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h2>Construtor de Chatbot</h2>

      <button onClick={adicionarBloco} style={{ margin: '1rem 0', padding: '0.5rem 1rem' }}>
        ➕ Adicionar Bloco
      </button>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {blocos.map((bloco) => (
          <div key={bloco.id} style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '1rem',
            background: '#fff',
            minWidth: '150px'
          }}>
            <strong>{bloco.tipo}</strong>
            <p>{bloco.conteudo}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
