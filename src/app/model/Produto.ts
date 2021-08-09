import { Categoria } from "./Categoria"
import { Usuario } from "./Usuario"


export class Produto{
    public id: number
    public tema: string
    public valor: number // perguntar professor "number" correto ?
    public experiencia: string
    public imagem: string
    public especificacao: string
    public usuario: Usuario
    public categoria: Categoria


}