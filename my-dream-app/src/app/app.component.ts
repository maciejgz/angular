import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //tu mozna wpisać wiele cssów po przecinku lub inline
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app 1';
  name = '';
}
