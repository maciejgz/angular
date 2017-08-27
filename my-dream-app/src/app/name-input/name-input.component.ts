import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.css']
})
export class NameInputComponent implements OnInit {
	username = '';
  buttonClicked = false;

  logs = [];

  constructor() { }
  ngOnInit() {
  }

  resetUsername() {
    this.username = '';
  }

 displaySettings() {
     this.buttonClicked = true;
     this.logs.push(new Date().getTime());
 }

}
