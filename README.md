# 🚀 Stock Control API

API REST robusta e escalável desenvolvida para o ecossistema Stock Control, utilizando **Node.js**, **Express** e **Prisma ORM**.

![Node.js](https://img.shields.io/badge/Node.js-LTS-green?logo=node.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2d3748?logo=prisma)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-DB-4169e1?logo=postgresql)

## 🌐 API Endpoint
🔗 **Base URL:** [https://api-stock-control-paulo.onrender.com](https://api-stock-control-paulo.onrender.com)

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

### Configuração do Ambiente
1. Clone o repositório.
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure o arquivo `.env` com sua string de conexão PostgreSQL:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/stock_db"
   JWT_SECRET="sua_chave_secreta"
   ```
4. Execute as migrações do banco:
   ```bash
   npx prisma migrate dev
   ```
5. Inicie em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

## 📂 Estrutura do Projeto
*   `src/controllers`: Recebimento de requisições e retorno de respostas.
*   `src/services`: Camada de lógica de negócio (Regras da aplicação).
*   `src/prisma`: Configurações e esquemas do banco de dados.

---
Desenvolvido por [Paulo Catto](https://github.com/PauloCatto)
