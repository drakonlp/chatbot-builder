import React from 'react';

export default function ChatbotBuilder() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ marginBottom: '1rem' }}>Construtor de Chatbot</h1>
      
      <p>Bem-vindo ao seu ambiente de criação de fluxos. Aqui você poderá:</p>
      <ul>
        <li>➕ Criar blocos de mensagens, perguntas e condições</li>
        <li>🔗 Conectar blocos de forma visual (drag & drop)</li>
        <li>💾 Salvar e carregar fluxos do banco de dados</li>
        <li>▶️ Visualizar a prévia do seu chatbot em tempo real</li>
      </ul>

      <p style={{ marginTop: '2rem', fontStyle: 'italic' }}>
        Interface gráfica ainda será carregada aqui (ex: React Flow).
      </p>
    </div>
  );
}
