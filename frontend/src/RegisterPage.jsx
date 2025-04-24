import React from 'react';

export default function RegisterPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Criar Conta</h1>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Nome completo" className="p-2 border rounded" />
        <input type="email" placeholder="E-mail" className="p-2 border rounded" />
        <input type="password" placeholder="Senha" className="p-2 border rounded" />
        <button className="bg-green-600 text-white p-2 rounded">Registrar</button>
      </form>
    </div>
  );
}
