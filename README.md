# 🍲 API Culinária

API desenvolvida para gerenciamento de receitas e ingredientes, incluindo criação, listagem e detalhamento das receitas e seus materiais.

## 🛠 Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [NestJS](https://nestjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [SQLite](https://www.sqlite.org/)
- [Swagger](https://swagger.io/) – documentação automática

## 📦 Instalação

Clone o repositório e instale as dependências:

```bash
npm install
```

Crie um arquivo `.env` baseado no `.env.example` enviado junto ao projeto.

Em seguida, gere os arquivos do Prisma:

```bash
npx prisma generate
```

## 🚀 Como iniciar a API

Para rodar a aplicação localmente, utilize:

```bash
npm run start
```

## 📚 Documentação da API

A documentação interativa está disponível via Swagger:

```
http://localhost:PORT/docs
```

Substitua `PORT` pela porta definida no seu `.env` ou `main.ts`.

## 📁 Estrutura do Projeto (resumida)

```bash
src/
├── useCases/         # Controllers das rotas
  ├── material        # Material rotas
  ├── revenue         # Revenue rotas
├── service/          # Serviços usados
├── repository/       # Acesso ao banco via Prisma
├── app.controller.ts # Controller Principal
├── main.ts           
└── ...
```

## ✅ Funcionalidades

- Criar receitas
- Listar receitas
- Adicionar materiais às receitas
- Listar materiais utilizados

## 📋 TODO

- [x] Documentação via Swagger
- [x] Integração com banco SQLite
- [ ] Adicionar testes unitários

## 👤 Autor

Desenvolvido por **Robson de Sousa**  
📧 Email: robsonsousasousa66@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/robson-sousa-110b4717a/)

---