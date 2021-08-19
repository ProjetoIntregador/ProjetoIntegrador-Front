import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/Produto';
import { ProdutoService } from 'src/app/service/produto.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-prod-delete',
  templateUrl: './prod-delete.component.html',
  styleUrls: ['./prod-delete.component.css']
})
export class ProdDeleteComponent implements OnInit {
  produto: Produto= new Produto
  idPost: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
  ) { }

  ngOnInit(){window.scroll(0,0)
  if (environment.token == ''){
    alert('Sua seção expirou, faça o login novamente!')

    this.router.navigate(['/entrar'])
  }
  this.idPost = this.route.snapshot.params['id']
  this.findByIdPostagem(this.idPost)

}

findByIdPostagem(id: number){
  this.produtoService.getByIdProduto(id).subscribe((resp: Produto)=>{
    this.produto = resp
  })
}




apagar(){
this.produtoService.deleteProduto(this.idPost).subscribe(()=>{
  alert('A postagem selecionado já era....')
  this.router.navigate(['/start'])
})

}

}
