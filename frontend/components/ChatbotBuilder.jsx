import React, { useState } from 'react';

export default function ChatbotBuilder() {
  const [blocks, setBlocks] = useState([]);

  const adicionarBloco = () => {
    const novoBloco = {
      id: blocks.length + 1,
      tipo: 'mensagem',
      conteudo: `Bloco ${blocks.length + 1}`
    };
    setBlocks([...blocks, novoBloco]);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h2>Construtor de Fluxo</h2>

      <button onClick={adicionarBloco} style={{ marginBottom: '1rem' }}>
        ➕ Adicionar Bloco
      </button>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {blocks.map((bloco) => (
          <div key={bloco.id} style={{
            padding: '1rem',
            border: '1px solid #ccc',
            borderRadius: '8px',
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
