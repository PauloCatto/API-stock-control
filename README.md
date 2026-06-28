# 🚀 Stock Control API

API REST robusta e escalável desenvolvida para o ecossistema Stock Control, utilizando **Node.js**, **Express** e **Prisma ORM**.

![Node.js](https://img.shields.io/badge/Node.js-LTS-green?logo=node.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2d3748?logo=prisma)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-DB-4169e1?logo=postgresql)
[![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/template/your-template-id)

## 🌐 API Endpoint
🔗 **Base URL:** [https://api-stock-control-production-276e.up.railway.app](https://api-stock-control-production-276e.up.railway.app)

## ⚙️ Funcionalidades Backend

*   🔐 **Autenticação JWT:** Sistema de login seguro com tokens de acesso.
*   🏗️ **Arquitetura Service Layer:** Lógica de negócio isolada para maior testabilidade.
*   💾 **Integridade de Dados:** Travas de segurança via Prisma para evitar deleção de categorias com produtos vinculados.
*   📡 **WebSockets (Socket.io):** Emissão de eventos em tempo real para atualização instantânea do dashboard.
*   🛠️ **Tratamento de Erros:** Middleware global para captura e retorno de mensagens amigáveis ao frontend.

## 🛠️ Stack Tecnológica

*   **Node.js & Express:** Servidor e roteamento.
*   **Prisma ORM:** Manipulação do banco de dados PostgreSQL.
*   **TypeScript:** Tipagem estática para maior segurança no desenvolvimento.
*   **Socket.io:** Comunicação bidirecional.
*   **BCrypt:** Hashing de senhas para segurança de usuários.

## 🚀 Como Iniciar

### Configuração do Ambiente (Exemplo Local)
1. Clone o repositório.
2. Instale as dependências: `npm install`.
3. Crie um arquivo `.env` na raiz do projeto e configure suas variáveis (veja o exemplo abaixo):
   ```env
   # Exemplo de configuração (Não envie seu .env real para o GitHub!)
   DATABASE_URL="postgresql://user:password@localhost:5432/stock_db"
   JWT_SECRET="sua_chave_secreta_aqui"
   ```
4. Execute as migrações do banco:
   ```bash
   npx prisma migrate dev
   ```
5. Inicie em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

## 🚂 Deploy (Railway)

Esta API está hospedada no **[Railway](https://railway.com)**.

### Variáveis de Ambiente no Railway

Ao fazer o deploy, configure as seguintes variáveis no painel do Railway:

| Variável | Descrição |
|---|---|
| `DATABASE_URL` | URL de conexão com o PostgreSQL (gerada automaticamente pelo Railway) |
| `JWT_SECRET` | Chave secreta para assinatura dos tokens JWT |
| `PORT` | Porta da aplicação (o Railway define automaticamente) |

### Passos para Deploy

1. Faça o fork ou clone deste repositório.
2. Acesse [railway.com](https://railway.com) e crie um novo projeto.
3. Selecione **"Deploy from GitHub repo"** e conecte este repositório.
4. Adicione um serviço **PostgreSQL** ao projeto.
5. Configure as variáveis de ambiente listadas acima.
6. O Railway irá detectar o `package.json` e realizar o build automaticamente.
7. Após o deploy, execute as migrações:
   ```bash
   npx prisma migrate deploy
   ```

---

## 📂 Estrutura do Projeto
*   `src/controllers`: Recebimento de requisições e retorno de respostas.
*   `src/services`: Camada de lógica de negócio (Regras da aplicação).
*   `src/prisma`: Configurações e esquemas do banco de dados.

