# API de Gerenciamento de Usuários 

Bem-vindo ao meu projeto de **API REST**! Desenvolvi esta aplicação para colocar em prática conceitos de back-end, utilizando Node.js e TypeScript para gerenciar o cadastro de usuários em um banco de dados MongoDB.

##  Sobre o Projeto
Esta é uma API funcional que permite realizar as operações do **CRUD** (Create, Read e Delete). O objetivo principal foi criar um sistema seguro onde os dados são validados antes de serem salvos, garantindo, por exemplo, que apenas maiores de idade sejam cadastrados.

###  Tecnologias Utilizadas
* **Node.js & Express:** Base para a construção do servidor e rotas.
* **TypeScript:** Utilizado para trazer tipagem e segurança ao código.
* **MongoDB & Mongoose:** Banco de dados NoSQL e modelagem de dados.
* **Dotenv:** Para gerenciamento de variáveis de ambiente (segurança).

---

## Como Funciona
A API está dividida em rotas específicas para cada ação:

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| **POST** | `/users` | Cria um novo usuário (Valida se é maior de 18 anos). |
| **GET** | `/users` | Lista todos os usuários cadastrados. |
| **DELETE** | `/users/:id` | Remove um usuário específico através do ID. |
| **DELETE** | `/users/email/:email` | Remove um usuário através do E-mail. |

---

##  Como Executar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone [Repositório da API no GitHub](https://github.com/Robert-739/API-Cadastro-de-Usu-rio.git)

2. **Instale as dependências:**
   ```bash
   npm install

3. **Configure as variáveis de ambiente:**
Crie um arquivo .env na raiz do projeto e adicione a sua porta e a sua string de conexão:
    ```bash
    PORT=3000
    MONGO_URI=mongodb+srv://...

4. **Inicie o servidor:**
    ```bash
    npm run dev