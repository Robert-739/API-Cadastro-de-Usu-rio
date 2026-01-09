import { Schema, model } from 'mongoose';

//Definição de tipos de dados
interface IUser {
    name: string;
    email: string;
    idade?: number;
    telefone?: string;
}

//Definição de como o mongoBD deve salvar cada campo
//required para tornar o campo obrigatório
//min[18] para deixar a idade mímina para ser salva como 18 anos
const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    idade: { type: Number, required: true, min:[18, "Você deve ser maior de idade!"]},
    telefone: { type: String}, 
});
// Exporta o modelo 'User' para ser usado em outras partes da API 
export const User = model<IUser>('User', userSchema);