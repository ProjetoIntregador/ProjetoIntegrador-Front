
import { Router } from '@angular/router';
import { UsuarioLogin } from './../model/UsuarioLogin';

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin()

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

   entrar(){
     this.auth.entrar(this.usuarioLogin).subscribe((resp: UsuarioLogin)=>{
       this.usuarioLogin = resp

       environment.token = this.usuarioLogin.token
       environment.id = this.usuarioLogin.id
       environment.nomeusuario = this.usuarioLogin.nomeusuario
       environment.foto = this.usuarioLogin.foto
       environment.tipo = this.usuarioLogin.empregador
       
       console.log(environment)
       this.router.navigate(['/start'])
     })
   }

}
