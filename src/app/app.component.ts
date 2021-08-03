import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD
  constructor(public auth: AuthService){
=======
  constructor(
    public auth: AuthService
  ){
>>>>>>> 96e1b1dcc1f457e9559d3a9e62cd47404863b9d1

  }
}
