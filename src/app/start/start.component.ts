import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { CategoriaService } from '../service/categoria.service';
import { Categoria } from '../model/Categoria';
import { Usuario } from '../model/Usuario';
import { ProdutoService } from '../service/produto.service';
import { AuthService } from '../service/auth.service';
import { AlertasService } from '../service/alertas.service';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  produto: Produto = new Produto()
  listaProduto:Produto[]
  temaProduto: string

  categoria: Categoria = new Categoria
  listaCategoria: Categoria[]
  idCategoria: number

  usuario: Usuario = new Usuario
  idUsuario = environment.id
  prod2: Produto = new Produto()
  foto = environment.foto
  nome = environment.nomeusuario
  empre = environment.tipo
  key = 'data'
  reverse = true

  idPost: number
  idProduto:number

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService,
    public authService: AuthService,
    private alertas: AlertasService

  ) { }

  ngOnInit() {
    window.scroll(0,0)
    if (environment.token == ''){
      this.alertas.showAlertInfo('Sua sessão expirou, faça o login novamente!')
      this.router.navigate(['/entrar'])
    }
      this.getAllProduto()
      this.getAllCategoria()

             // this.idPost = this.route.snapshot.params['id']
    }



    getAllCategoria(){
      this.categoriaService.getAllCategoria().subscribe((resp: Categoria[])=>{
        this.listaCategoria = resp
      })
    }

    // findByIdProduto(){
    //   this.produtoService.getByIdProduto(this.idProduto).subscribe((resp: Produto)=>{
    //     this.prod2 = resp
    //   })
    // }
    findByIdCategoria(){
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria)=>{
      this.categoria = resp
      })
    }
    findByIdProduto(){
      this.produtoService.getByIdProduto(this.idProduto).subscribe((resp: Produto)=>{
        this.prod2 = resp
        })
      }

  getAllProduto(){
    this.produtoService.getAllProduto().subscribe((resp: Produto[])=>{
      this.listaProduto = resp
    })
  }

  findByIdUsuario(){
    this.authService.getByIdUsuario(this.idUsuario).subscribe((resp:Usuario)=>{
      this.usuario = resp
    })
  }

  publicar(){
    this.categoria.id = this.idCategoria
    this.produto.categoria = this.categoria

    this.usuario.id = this.idUsuario
    this.produto.usuario = this.usuario
     console.log(this.produto)
     console.log(environment)
    this.produtoService.postProduto(this.produto).subscribe((resp: Produto) =>{
      this.produto = resp
      this.alertas.showAlertSuccess('Vaga postada com sucesso!')
      this.produto = new Produto()
      this.getAllProduto()
    })
  }

  // apagar(){

  //   this.produtoService.deleteProduto(this.idPost).subscribe(()=>{
  //     alert('A postagem selecionado já era....')
  //     this.router.navigate(['/start'])
  //   })

  findByTemaProduto(){
    if(this.temaProduto == ''){
      this.getAllProduto()
    } else {

      this.produtoService.getByTemaProduto(this.temaProduto).subscribe((resp : Produto[])=> {
        this.listaProduto = resp
      })
    }
  }

  // curtida(id: number){
  //   this.authService.putCurtir(id).subscribe(()=>{
  //     this.getAllProduto()
  //   })
  // }

}
