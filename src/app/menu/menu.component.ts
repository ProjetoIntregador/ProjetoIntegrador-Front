import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  usuario: Usuario = new Usuario()
  listaUsuario: Usuario[]
  nome = environment.nomeusuario
  idUsuario = environment.id
  foto = environment.foto
  id = environment.id

  constructor(
    private router: Router,
    public authService: AuthService,

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

  findByIdUsuario(){
    this.authService.getByIdUsuario(this.idUsuario).subscribe((resp:Usuario)=>{
      this.usuario = resp
    })
  }

  getAllUsuarios(){
    this.authService.getAllUsuarios().subscribe((resp: Usuario[])=>{
      this.listaUsuario = resp
    })
  }
}
