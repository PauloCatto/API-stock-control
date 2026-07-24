# 🚀 Stock Control API

API REST robusta e escalável desenvolvida para o ecossistema Stock Control, utilizando **Node.js**, **Express**, **TypeScript** e **Prisma ORM**.

![Node.js](https://img.shields.io/badge/Node.js-LTS-green?logo=node.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2d3748?logo=prisma)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-DB-4169e1?logo=postgresql)
![Vercel](https://img.shields.io/badge/Vercel-Serverless-000000?logo=vercel)

---

## ⚙️ Funcionalidades Backend

* 🔐 **Autenticação JWT:** Sistema de login seguro com tokens de acesso.
* 🏗️ **Arquitetura Service Layer:** Lógica de negócio isolada para maior testabilidade.
* 💾 **Integridade de Dados:** Travas de segurança via Prisma para evitar deleção de categorias com produtos vinculados.
* 📡 **WebSockets (Socket.io):** Emissão de eventos em tempo real para atualização instantânea do dashboard.
* 🛠️ **Tratamento de Erros:** Middleware global para captura e retorno de mensagens amigáveis ao frontend.

---

## 🛠️ Stack Tecnológica

* **Node.js & Express:** Servidor e roteamento REST.
* **Prisma ORM:** Manipulação do banco de dados PostgreSQL.
* **TypeScript:** Tipagem estática para maior segurança no desenvolvimento.
* **Socket.io:** Comunicação bidirecional em tempo real.
* **BCrypt:** Hashing de senhas para segurança de usuários.

---

## 💻 Como Iniciar Localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/PauloCatto/API-stock-control.git
   cd API-stock-control
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure o arquivo `.env`:**
   Crie um arquivo `.env` na raiz do projeto:
   ```env
   DATABASE_URL="postgres://usuario:senha@host:5432/nome_banco?sslmode=require"
   JWT_SECRET="sua_chave_secreta_aqui"
   ```

4. **Execute as migrações do banco:**
   ```bash
   npx prisma migrate deploy
   ```

5. **Inicie o servidor em modo de desenvolvimento:**
   ```bash
   npm run dev
   ```

---

## 📐 Deploy na Vercel

Esta API está otimizada para deploy em arquitetura **Serverless na Vercel**.

### Variáveis de Ambiente no Painel da Vercel

Ao configurar o projeto na Vercel, defina as seguintes **Environment Variables**:

| Variável | Descrição |
|---|---|
| `DATABASE_URL` | String de conexão do banco de dados PostgreSQL (Prisma Postgres / Vercel Postgres / Neon) |
| `JWT_SECRET` | Chave secreta para assinatura dos tokens JWT |

### Passos para Deploy

1. Faça o commit e push do repositório para o GitHub:
   ```bash
   git add .
   git commit -m "feat: configuracoes vercel"
   git push origin main
   ```
2. Acesse [vercel.com](https://vercel.com) e clique em **Add New Project**.
3. Importe este repositório (`API-stock-control`).
4. Configure as variáveis de ambiente (`DATABASE_URL` e `JWT_SECRET`).
5. Clique em **Deploy**. O script `vercel-build` executará o `prisma generate` e a compilação automaticamente!

---

## 📂 Estrutura do Projeto

```text
├── api/             # Handler Serverless para Vercel
├── prisma/          # Esquema do Prisma e migrações do banco
├── src/
│   ├── controllers/ # Controladores das rotas HTTP
│   ├── services/    # Lógica de negócio e regras de aplicação
│   ├── middlewares/ # Middlewares de autenticação e tratamento de erros
│   ├── routes.ts    # Definição de rotas da aplicação
│   ├── app.ts       # Configuração do Express e Middlewares
│   └── server.ts    # Inicialização do servidor HTTP e WebSockets
└── vercel.json      # Configuração de roteamento da Vercel
```
