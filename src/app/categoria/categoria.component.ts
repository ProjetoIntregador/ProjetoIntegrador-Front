import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categoria: Categoria = new Categoria()
  listaCategoria: Categoria[]

  constructor( 
    private router: Router,
    private categoriaService: CategoriaService
    ) { }

  ngOnInit() {
  }

  cadastrar(){
    this.categoriaService.postCategoria(this.categoria).subscribe((resp: Categoria)=>{
      this.categoria = resp
      alert('Categoria cadastrada com Sucesso :)')
      this.categoria = new Categoria()
    })
  }

}
