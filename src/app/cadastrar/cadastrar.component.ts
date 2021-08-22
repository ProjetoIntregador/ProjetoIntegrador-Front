import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario
  confirmarSenha: string
  tipoUsuario: string
  // fotoalterada: string
  constructor(
    private authService: AuthService,
     private router: Router,
     private alertas: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmSenha(event: any){
    this.confirmarSenha = event.target.value
  }

  tipoUser(event: any){
    this.tipoUsuario = event.target.value
  }

  cadastrar(){
    this.usuario.empregador = this.tipoUsuario
    // this.usuario.foto = this.fotoalterada + '.png'
    console.log(this.usuario)
    if(this.usuario.senha != this.confirmarSenha){
      this.alertas.showAlertDanger('A senha esta incorreta.')
    }else{
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {

        this.usuario = resp
        console.log(this.usuario)
        this.router.navigate(['/entrar'])
        this.alertas.showAlertSuccess('Usuario cadastrado com sucesso')
      })
    }

  }
}



