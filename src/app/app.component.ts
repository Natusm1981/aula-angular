import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Nataniel';

  userData ={
    email: 'natuss.m@gmail.com',
    role: 'comercial'
  } 

  title = 'meu-app';
}
