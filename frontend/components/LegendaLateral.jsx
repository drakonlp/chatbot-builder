import React from 'react';

export default function LegendaLateral() {
  return (
    <aside style={{ padding: '1rem', backgroundColor: '#f9f9f9', borderRight: '1px solid #ddd', minHeight: '100vh' }}>
      <h3 style={{ marginBottom: '1rem' }}>Legenda</h3>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        <li><strong>🔵 Mensagem:</strong> Bloco que envia um texto ao usuário</li>
        <li><strong>🟢 Pergunta:</strong> Bloco que coleta resposta do usuário</li>
        <li><strong>🟡 Condição:</strong> Define regras com base na resposta</li>
        <li><strong>🔴 Ação:</strong> Chama uma API ou envia info externa</li>
      </ul>
    </aside>
  );
}
