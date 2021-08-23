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
import { CategoriaEditeComponent } from './edit/categoria-edite/categoria-edite.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { AlertasComponent } from './alertas/alertas.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TesteComponent } from './teste/teste.component';
import { OrderModule } from 'ngx-order-pipe';

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
    ProdutoEditComponent,
    ProdutoDeleteComponent,
    UsuarioEditComponent,
    AlertasComponent,
    TesteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    OrderModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
