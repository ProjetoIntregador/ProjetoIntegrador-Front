import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  nomeusuario = environment.nomeusuario
  idUsuario = environment.id
  foto = environment.foto
  id = environment.id

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

  }


  sair() {
    this.router.navigate(['/entrar'])
    environment.token ='',
    environment.nomeusuario ='',
    environment.foto ='',
    environment.id =0
  }


}
