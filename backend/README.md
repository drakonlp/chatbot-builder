# 🚀 Chatbot Builder - Backend FastAPI + PostgreSQL (Render Deploy)

Este projeto é o backend do construtor de chatbots com armazenamento de fluxos em banco de dados PostgreSQL.

## 📦 Requisitos
- Python 3.10+
- PostgreSQL (local ou Render)
- Conta no [Render.com](https://render.com)

## 📁 Estrutura
- `main.py`: código FastAPI com SQLAlchemy
- `requirements.txt`: dependências do projeto
- `docker-compose.yml`: ambiente local com PostgreSQL

## 🔧 Executar localmente com Docker

```bash
docker-compose up --build
```

Acesse: [http://localhost:8000/docs](http://localhost:8000/docs) para a API interativa.

## 🌐 Deploy no Render

### 1. Suba no GitHub:
Inclua os arquivos `main.py`, `requirements.txt`, `README.md` e o `docker-compose.yml`.

### 2. Crie o banco PostgreSQL no Render

- Vá em **Databases > New PostgreSQL**
- Copie o `DATABASE_URL` fornecido após a criação

### 3. Crie o Web Service (backend)

- Vá em **Web Services > New**
- Conecte ao repositório GitHub com seu código
- Configure:
  - **Build Command:** `pip install -r requirements.txt`
  - **Start Command:** `uvicorn main:app --host 0.0.0.0 --port 10000`
  - **Environment Variable:**
    ```
    DATABASE_URL=postgresql://<user>:<password>@<host>:5432/<dbname>
    ```

## ✅ Endpoints disponíveis

- `POST /api/flows` → Salva o fluxo (nodes + edges)
- `GET /api/flows/{id}` → Retorna o fluxo salvo

Feito com ❤️ por ChatGPT com base no projeto Typebot.io
