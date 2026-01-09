import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

// Inicializa o Express
const app = express();

// Faz com que API consiga ler e entender o formato JSON 
app.use(express.json());

// Importa e ativa as rotas de usuários definidas no arquivo userRoutes
app.use(userRoutes);

// Define a porta do servidor: usa a do .env ou a porta 3000 como padrão
//Mesmo q aue a porta no arquivo env. seja a 3000, tem o ( || 3000) por segurança
const PORT = process.env.PORT || 3000;

// Pega a URL de conexão do MongoDB no arquivo .env
const MONGO_URI = process.env.MONGO_URI ;

// Tenta conectar ao banco de dados MongoDB Atlas
mongoose.connect(MONGO_URI)
  .then(() => {
    // Se a conexão for bem-sucedida, imprime no console e inicia o servidor
    console.log('Conectado ao MongoDB');
    app.listen(PORT, () => console.log(` Servidor rodando na porta ${PORT}`));
  })
  // Caso haja erro na conexão, imprime o erro no console
  .catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err.message);
  });