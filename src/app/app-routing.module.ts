import { StartComponent } from './start/start.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { HomeComponent } from './home/home.component';
import { PostagensComponent } from './postagens/postagens.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaEditeComponent } from './edite/categoria-edite/categoria-edite.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';

const routes: Routes = [
  {path: '' , redirectTo:'/home', pathMatch: 'full'},

  {path: 'entrar', component:EntrarComponent },
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'produto/:id', component: PostagensComponent},
  {path: 'home', component: HomeComponent},
  {path: 'start', component: StartComponent},
  {path: 'categoria', component: CategoriaComponent},
  {path: 'categoria-edite/:id', component: CategoriaEditeComponent},
  {path: 'categoria-delete/:id', component: CategoriaDeleteComponent},
  {path: 'produto-edit/:id', component: ProdutoEditComponent},
  {path: 'produto-delete/:id', component: ProdutoDeleteComponent},
  {path: 'usuario-edit/:id' , component: UsuarioEditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
