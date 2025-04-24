import React from 'react';

export default function LoginPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Entrar</h1>
      <form className="flex flex-col gap-4">
        <input type="email" placeholder="E-mail" className="p-2 border rounded" />
        <input type="password" placeholder="Senha" className="p-2 border rounded" />
        <button className="bg-blue-600 text-white p-2 rounded">Entrar</button>
      </form>
    </div>
  );
}
