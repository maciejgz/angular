import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
	allowNewServer = false;
  serverCreationStatus = 'No server created!';
  serverName='test server';
  serverCreated = false;

  constructor() { 
  	setTimeout(() => {
  		this.allowNewServer = true;
  	},2000);
   }

  ngOnInit() {
  }


  //metoda eventowa
  onCreateServer() {
    this.serverCreationStatus = 'Server was created! ' + this.serverName;
    this.serverCreated = true;
  }


onUpdateServerName(event : any) {
  this.serverName = (<HTMLInputElement>event.target).value;
}

}
