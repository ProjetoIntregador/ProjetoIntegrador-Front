import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { Produto } from 'src/app/model/Produto';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ProdutoService } from 'src/app/service/produto.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-produto-edite',
  templateUrl: './produto-edite.component.html',
  styleUrls: ['./produto-edite.component.css']
})
export class ProdutoComponent implements OnInit {
  produto: Produto = new Produto()
  categoria: Categoria = new Categoria()
  listaCategoria: Categoria[]
  idCategoria: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit(){

    window.scroll(0,0)
    if (environment.token == ''){
      alert('Sua seção expirou, faça o login novamente!')

      this.router.navigate(['/entrar'])
    }
    let id = this.route.snapshot.params['id']
    this.findByIdProduto(id)
    this.findByIdCategoria()
    this.findAllCategoria()
  }

  findByIdProduto(id: number){
    this.produtoService.getProdutoById(id).subscribe((resp: Produto)=>{
      this.produto = resp
    })
  }

  findByIdCategoria(){
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria)=>{
      this.categoria = resp
    })
  }

  findAllCategoria(){
    this.categoriaService.getAllCategoria().subscribe((resp:Categoria[])=>{
      this.listaCategoria = resp
  })
  }


  atualizar(){
    this.categoria.id = this.idCategoria
    this.produto.categoria = this.categoria

    this.produtoService.putProduto(this.produto).subscribe((resp:Produto)=>{
      this.produto = resp
      alert('Postagem Atualizada com Sucesso!!!!!!')
      this.router.navigate(['/inicio'])
    })

}
}
