import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { HomeComponent } from './home/home.component';
import { PostagensComponent } from './postagens/postagens.component';

const routes: Routes = [
  {path: '' , redirectTo:'entrar', pathMatch: 'full'},

  { path: 'entrar', component:EntrarComponent },
  { path: 'cadastrar', component: CadastrarComponent},
<<<<<<< HEAD
  {path: ' postagem', component: PostagensComponent},
  {path: 'home', component: HomeComponent},
  
=======
  {path: 'postagem', component: PostagensComponent}
>>>>>>> 96e1b1dcc1f457e9559d3a9e62cd47404863b9d1

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
