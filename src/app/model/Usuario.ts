import { Produto } from "./Produto"

export class Usuario{
    public id: number
    public nomeusuario: string
    public email: string
    public datanascimento: Date
    public genero: string
    public foto: string
    public empregador: string 
    public produto: Produto[]
}