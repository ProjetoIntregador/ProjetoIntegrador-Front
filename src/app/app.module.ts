import { RodapeComponent } from './rodape/rodape.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntrarComponent } from './entrar/entrar.component';
import { PostagensComponent } from './postagens/postagens.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EntrarComponent,
    PostagensComponent,
    CadastrarComponent,
    MenuComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
