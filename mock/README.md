Mock API para desenvolvimento usando json-server.

Como usar:

1. Ir para a pasta do mock:

```bash
cd versao-inicial/mock
```

2. Instalar dependências:

```bash
npm install
```

3. Iniciar o mock na porta `3001`:

```bash
npm start
```

Endpoints disponíveis (exemplos):

- `GET /categories` — lista de categorias
- `GET /categories/1` — categoria por id
- `GET /articles` — lista de artigos
- `GET /users` — lista de usuários

Exemplo curl:

```bash
curl http://localhost:3001/categories
```

Observações:
- Os nomes de campos seguem o esperado pelo backend/frontend: `categoryId` em `articles`, `parentId` em `categories`.
- Ajuste a porta no script se colidir com outros serviços.
