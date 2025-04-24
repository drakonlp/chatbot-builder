import React, { useState } from 'react';
import ChatbotBuilder from './components/ChatbotBuilder.jsx';
import LoginPage from './components/LoginPage.jsx';
import RegisterPage from './components/RegisterPage.jsx';

export default function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [showRegister, setShowRegister] = useState(false);

  const handleLogin = () => {
    const newToken = localStorage.getItem('token');
    if (newToken) setToken(newToken);
  };

  const handleRegister = () => {
    setShowRegister(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  if (token) {
    return (
      <div className="relative h-screen w-screen">
        <button
          onClick={handleLogout}
          className="absolute top-2 right-4 bg-red-600 text-white px-3 py-1 rounded z-50"
        >
          Sair
        </button>
        <ChatbotBuilder />
      </div>
    );
  }

  if (showRegister) {
    return <RegisterPage onRegister={handleRegister} />;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <LoginPage onLogin={handleLogin} />
      <button
        onClick={() => setShowRegister(true)}
        className="mt-4 text-sm text-blue-600 hover:underline"
      >
        Criar uma conta
      </button>
    </div>
  );
}
