import { Produto } from "./Produto"

export class Categoria{
    public id: number
    public tipotrabalho: string
    public descricao: string
    public palavrachave: string
    public produto: Produto[]
}
