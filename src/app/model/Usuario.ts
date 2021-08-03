import { Produto } from "./Produto"

export class Usuario{
    public id: number
    public nomeusuario: string
    public email: string
    public datanascimento: Date
    public genero: string
    public foto: string   //lembrar de fazer input com .jpeg configurado
    public empregador: boolean
    public senha: string
    public produto: Produto[]
}