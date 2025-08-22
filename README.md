# 🚀 API de Pedidos – Node.js + Express

Este repositório contém uma aplicação **Back-End** desenvolvida com **Node.js e Express**, simulando um sistema de gerenciamento de pedidos (CRUD completo).
O objetivo deste projeto é consolidar meus estudos em **criação de APIs REST, middlewares** e boas práticas de desenvolvimento para minha carreira em **Desenvolvimento Back-End**.


## 📍 Funcionalidades
- **Criar um novo pedido** (```POST /order```)
- **Listar todos os pedidos** (```GET /order```)
- **Buscar pedido por ID** (```GET /order/:id```)
- **Atualizar pedido** (```PUT /order/:id```)
- **Deletar pedido** (```DELETE /order/:id```)
- Middleware para validar se o **ID do pedido existe**

## 🛠️ Tecnologias Utilizadas
- **Node.js**
- **Express**
- **UUID** (para geração de IDs únicos)
- **Insomnia** (para testar rotas)


## ▶️ Como Executar o Projeto
```
# 1. Clonar o repositório
git clone https://github.com/gabrielschug/api-pedidos.git

# 2. Entrar na pasta do projeto
cd api-pedidos

# 3. Instalar dependências
npm install

# 4. Rodar a aplicação
npm run dev
```
> Servidor rodará em: http://localhost:3000


## 📬 Exemplo de Requisições

### Criar Pedido
```
POST /order
{
  "order": "Pizza Calabresa",
  "clientName": "Gabriel Schug",
  "price": 55.90
}
```
### Resposta
```
{
  "id": "uuid-gerado",
  "order": "Pizza Calabresa",
  "clientName": "Gabriel Schug",
  "price": 55.90
}
```
## ✨ Aprendizados

Durante o desenvolvimento deste projeto, aprimorei conhecimentos em:

- Estruturação de **APIs RESTful**
- Criação e uso de **Middlewares**
- **Manipulação de arrays e objetos** no back-end
- Boas práticas de **versionamento com GitHub**

### ✍️ Autor

#### Gabriel Meireles Schug

[🌐 Portfólio](https://gabrielschug.com.br/)
[💻 GitHub](https://github.com/gabrielschug/)
[🔗 LinkedIn](https://www.linkedin.com/in/gabrielschug/)
