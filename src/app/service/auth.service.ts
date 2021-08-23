import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }
  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>('https://queryjobs.herokuapp.com/usuarios/logar', usuarioLogin)
  }

  cadastrar(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>('https://queryjobs.herokuapp.com/usuarios/cadastrar', usuario)

  }

  getAllUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`https://queryjobs.herokuapp.com/usuarios/`)
  }

  getByIdUsuario(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`https://queryjobs.herokuapp.com/usuarios/${id}`)
  }

  putCurtir(id: number): Observable<Usuario>{
    return this.http.put<Usuario>(`https://queryjobs.herokuapp.com/usuario/curtir/${id}`, this.token)

  }
  putDescurtir(id: number): Observable<Usuario>{
    return this.http.put<Usuario>(`https://queryjobs.herokuapp.com/usuario/descurtir/${id}`, this.token)

  }

  logado(){
    let ok:boolean = false

    if (environment.token != ''){
      ok = true
    }


    return ok
  }



  empregador(){
    let ok: boolean = false

    if(environment.tipo == 'empregador'){
      ok = true
    }
    return ok
  }


  atualizar(usuario: Usuario):Observable<Usuario>{
    return this.http.put<Usuario>('https://queryjobs.herokuapp.com/usuarios/alterar', usuario)
    }




}
