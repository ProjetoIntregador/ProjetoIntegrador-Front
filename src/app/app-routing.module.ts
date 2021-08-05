import { InicioComponent } from './inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { HomeComponent } from './home/home.component';
import { PostagensComponent } from './postagens/postagens.component';
import { CategoriaComponent } from './categoria/categoria.component';

const routes: Routes = [
  {path: '' , redirectTo:'entrar', pathMatch: 'full'},

  { path: 'entrar', component:EntrarComponent },
  { path: 'cadastrar', component: CadastrarComponent},
  {path: 'postagem', component: PostagensComponent},
  {path: 'home', component: HomeComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'categoria', component: CategoriaComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
