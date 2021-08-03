import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario
  confirmarSenha: string
  tipoUsuario: boolean //trocar para string para ter adm

  constructor(
    private authService: AuthService,
     private router: Router
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
    console.log(this.usuario)
    if(this.usuario.senha != this.confirmarSenha){
      alert('A senha esta incorreta.')
    }else{
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
       
        this.usuario = resp  
        console.log(this.usuario)
        this.router.navigate(['/entrar'])
        alert('Usuario cadastrado com sucesso')
      })
    }
  }
}



