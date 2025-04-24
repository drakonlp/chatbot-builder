import { useState } from 'react';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    senha: ''
  });

  const [mensagem, setMensagem] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aqui pode ser feita a requisição para backend com fetch/axios
    console.log('Login enviado:', formData);

    // Exemplo fictício
    if (formData.email === 'admin@teste.com' && formData.senha === '1234') {
      setMensagem('Login bem-sucedido!');
    } else {
      setMensagem('Email ou senha inválidos.');
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '400px', margin: 'auto' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>Senha:</label><br />
          <input
            type="password"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Entrar</button>
      </form>

      {mensagem && (
        <p style={{ marginTop: '1rem', color: mensagem.includes('inválido') ? 'red' : 'green' }}>
          {mensagem}
        </p>
      )}
    </div>
  );
}
