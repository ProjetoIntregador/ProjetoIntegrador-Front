import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { CategoriaService } from 'src/app/service/categoria.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-categoria-edite',
  templateUrl: './categoria-edite.component.html',
  styleUrls: ['./categoria-edite.component.css']
})
export class CategoriaEditeComponent implements OnInit {

  categoria: Categoria = new Categoria
  constructor(
    private router: Router,
    private categoriaService: CategoriaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    // if (environment.token == ''){
    //   alert('Sua sessão expirou')
    //   this.router.navigate(['/entrar'])
    // }
    let id = this.route.snapshot.params['id']
    this.findByIdCategoria(id)

  }

  findByIdCategoria(id:number){
  this.categoriaService.getByIdCategoria(id).subscribe((resp:Categoria)=>{
    this.categoria = resp
  })
  }

  atualizar(){
    this.categoriaService.putCategoria(this.categoria).subscribe((resp:Categoria)=>{
      this.categoria = resp
      alert('Categoria foi atualizada com sucesso')
      this.router.navigate(['/categoria'])
    })
  }

}
