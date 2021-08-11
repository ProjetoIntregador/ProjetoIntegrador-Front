import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { AlertasService } from '../service/alertas.service';
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
    private categoriaService: CategoriaService,
    private alertas: AlertasService
    ) { }

  ngOnInit(){
  // if(environment.token == ''){
  //   // alert('sua sessão expirou, faça o login novamente.')
  //   this.router.navigate(['/entrar'])
  // } 
    this.findAllCategoria()
  }

  findAllCategoria(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[])=>{
      this.listaCategoria = resp
    })
  }

  cadastrar(){
    this.categoriaService.postCategoria(this.categoria).subscribe((resp: Categoria)=>{
      this.categoria = resp
      this.alertas.showAlertSuccess('Categoria cadastrada com Sucesso :)')
      this.findAllCategoria()
      this.categoria = new Categoria()
    })
  }

}
