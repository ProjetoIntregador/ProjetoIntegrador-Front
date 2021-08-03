import { Produto } from "./Produto"

export class Usuario{
    public id: number
    public nomeusuario: string
    public senha: string
    public email: string
    public datanascimento: Date
    public genero: string
<<<<<<< HEAD
    public foto: string
    public empregador: string
=======
    public foto: string   //lembrar de fazer input com .jpeg configurado
    public empregador: boolean
    public senha: string
>>>>>>> 96e1b1dcc1f457e9559d3a9e62cd47404863b9d1
    public produto: Produto[]
}
