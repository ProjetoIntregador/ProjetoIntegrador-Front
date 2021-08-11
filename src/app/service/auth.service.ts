import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>('https://queryjobs.herokuapp.com/usuarios/logar', usuarioLogin)
  }

  cadastrar(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>('https://queryjobs.herokuapp.com/usuarios/cadastrar', usuario)

  }
  getByIdUsuario(id:number): Observable<Usuario>{
    return this.http.get<Usuario>(`https://jvlbloogs.herokuapp.com/usuarios/${id}`)
 }

  getByIdUsuario(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`https://queryjobs.herokuapp.com/usuarios/${id}`)
  }



  logado(){
    let ok:boolean = false

    if (environment.token != ''){
      ok = true
    }


    return ok
  }

  atualizar(usuario: Usuario):Observable<Usuario>{
    return this.http.put<Usuario>('https://queryjobs.herokuapp.com/usuarios/alterar', usuario)
    }




}
