import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntrarComponent } from './entrar/entrar.component';
import { PostagensComponent } from './postagens/postagens.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { MenuComponent } from './menu/menu.component';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
=======
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RodapeComponent } from './rodape/rodape.component';
>>>>>>> 96e1b1dcc1f457e9559d3a9e62cd47404863b9d1

@NgModule({
  declarations: [
    AppComponent,
    EntrarComponent,
    PostagensComponent,
    CadastrarComponent,
    MenuComponent,
<<<<<<< HEAD
    HomeComponent,
=======
    RodapeComponent
>>>>>>> 96e1b1dcc1f457e9559d3a9e62cd47404863b9d1
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
