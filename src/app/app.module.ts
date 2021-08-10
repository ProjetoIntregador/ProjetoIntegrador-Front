import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntrarComponent } from './entrar/entrar.component';
import { PostagensComponent } from './postagens/postagens.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RodapeComponent } from './rodape/rodape.component';
import { CategoriaComponent } from  './categoria/categoria.component';
import { StartComponent } from './start/start.component';
import { CategoriaEditeComponent } from './edite/categoria-edite/categoria-edite.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
z
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { ProdutoComponent } from './edite/produto/produto.component';

@NgModule({
  declarations: [
    AppComponent,
    EntrarComponent,
    PostagensComponent,
    CadastrarComponent,
    MenuComponent,
    RodapeComponent,
    CategoriaComponent,
    StartComponent,
    CategoriaEditeComponent,
    CategoriaDeleteComponent,
    PostagemEditeComponent,
    PostagemDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
