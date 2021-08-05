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
import { CategoriaComponent } from  './categoria/categoria.component'

@NgModule({
  declarations: [
    AppComponent,
    EntrarComponent,
    PostagensComponent,
    CadastrarComponent,
    MenuComponent,
    RodapeComponent,
    CategoriaComponent
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
