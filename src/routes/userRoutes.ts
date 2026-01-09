import { Router, Request, Response } from 'express';
import { User } from '../models/User.js';

const router = Router();

// Criar um novo usuário (POST)
//Definição da rota post, endpoint como /users, async para o node funcionar mesmo com a possível "demora", processa a entrada (req) e envia a resposta (res)
router.post('/users', async (req: Request, res: Response) => {
  try {
    //Desestruturação para que cada const receba seu devido valor vindo do body
    const { name, email, telefone, idade } = req.body;

    //Instanciando newUser para receber os dados recebidos
    const newUser = new User({ name, email, telefone, idade });

    //Comando dizendo para aguardar os dados, depois salva-los no banco de dados
    await newUser.save();
    
    //resposta 201 = Criado com sucesso & .json(newUser) retorna os dados no formato json
    res.status(201).json(newUser);

    //Mensagem de erro caso não funcione
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar usuário', error });
  }
});

// Listar todos os usuários (GET)
//Definição da rota get, endpoint como /users, async para o node funcionar mesmo com a possível "demora", processa a entrada (req) e envia a resposta (res)
router.get('/users', async (req: Request, res: Response) => {
  try {
    //const receberá tudo o que for encontrado no banco
    const users = await User.find();
    //Resposta caso de certo
    res.status(200).json(users);
  } catch (error) {
    //Resposta caso de errado
    res.status(500).json({ message: 'Erro ao buscar usuários', error });
  }
});

// Deletar por ID 
//Definição da rota delete por ID, endpoint como /users, async para o node funcionar mesmo com a possível "demora", processa a entrada (req) e envia a resposta (res)
//:id = parametro dinâmico
router.delete('/users/:id', async (req: Request, res: Response) => {
  try {
    
    // Desestruturação para extrair o ID diretamente dos parâmetros da URL (req.params)
    const { id } = req.params;
    
    // Comando que busca o usuário pelo ID e o remove do banco de dados 
    const user = await User.findByIdAndDelete(id);
    
    // Verifica se o usuário não existe. se for null, retorna status 404 e encerra a função
    if (!user) return res.status(404).json({ message: 'ID não encontrado' });
    
    // Se encontrou e deletou, retorna status 200 (OK) e uma mensagem de confirmação
    res.status(200).json({ message: 'Usuário deletado por ID com sucesso' });
    
    // Caso de errado ele retorna status 400
  } catch (error) {
    res.status(400).json({ message: 'Erro ao deletar', error });
  }
});

// Deletar por Email
//Definição da rota delete por email, endpoint como /users, async para o node funcionar mesmo com a possível "demora", processa a entrada (req) e envia a resposta (res)
router.delete('/users/email/:email', async (req: Request, res: Response) => {
  try {

    // Desestruturação para extrair o email dos parâmetros da URL (req.params)
    const { email } = req.params;

    // findOneAndDelete: Busca um documento que seja igual ao filtro {email} e o remove
    const user = await User.findOneAndDelete({ email: email });
    
    // Se não encontrar nenhum usuário com esse e-mail ele retorna erro 404
    if (!user) return res.status(404).json({ message: 'E-mail não encontrado' });

    // Retorna status 200 confirmando que o usuário dono desse e-mail foi removido
    res.status(200).json({ message: 'Usuário deletado por e-mail com sucesso' });

    // Caso de errado ele retorna status 400
  } catch (error) {
    res.status(400).json({ message: 'Erro ao deletar', error });
  }
});
// Exporta o router para que ele possa ser importado e usado no arquivo principal (index.ts)
export default router;