# 🔐 BetterNews - Fullstack Hacker News Clone

Esse repositório é uma implementação de autenticação utilizando [Better Auth](https://www.better-auth.com/), com suporte atualmente só para credentials login - utilizando as tecnologias abaixo.

## ⚙️ Tecnologias utilizadas

- Hono
- Bun
- DrizzleORM
- Postgres
- Tanstack Router
- Tanstack Query / React Query
- Tanstack Form
- Zod
- TypeScript

---

## 🚀 Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/betternews.git
cd betternews
```

### 2. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com base no `.env.example`:

```bash
cp .env.example .env
```

Edite as variáveis conforme sua configuração local:

```env
DATABASE_URL=postgres://usuario:senha@localhost:5432/basededados
BETTER_AUTH_SECRET=sua_chave_secreta
BETTER_AUTH_URL=http://localhost:3000
CORS_ORIGIN=http://localhost:3050
NODE_ENV=development
```

Na pasta `frontend`, faça o mesmo:

```bash
cd frontend
cp .env.example .env
```

### 3. Instale as dependências

Este projeto utiliza o [Bun](https://bun.sh/) como gerenciador:

```bash
bun install
```

Para o frontend (React com Vite):

```bash
cd frontend
bun install
```

### 4. Configure o banco de dados

Gere as tabelas no Postgres com o Drizzle:

```bash
bun drizzle:push
```

> Certifique-se de que o Postgres esteja rodando e o `DATABASE_URL` esteja correto.

### 5. Rode o servidor

```bash
bun dev
```

O servidor estará disponível em `http://localhost:3000`.

### 6. Rode o frontend

Em outro terminal:

```bash
cd frontend
bun dev
```

A interface estará disponível em `http://localhost:3050`.

---

## 🗂️ Estrutura do Projeto

```
better-auth/
├── drizzle/             # Migrations e schema do DrizzleORM
├── server/              # Código do backend com Hono
├── shared/              # Código compartilhado (schemas, tipos, validações)
├── frontend/            # Frontend React com Vite + Tanstack
├── .env.example         # Variáveis de ambiente para o backend
├── drizzle.config.ts    # Configuração do DrizzleORM
├── eslint.config.mjs    # Regras de linting
├── package.json         # Dependências e scripts
├── bun.lockb            # Lockfile do Bun
├── tsconfig.json        # Configuração do TypeScript
```

---

## 📄 Licença

Este projeto está licenciado sob a **MIT License**.  
Sinta-se livre para usar, modificar e distribuir.

---

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou PRs com melhorias, correções ou sugestões.
