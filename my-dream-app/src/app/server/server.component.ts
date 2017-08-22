import { Component } from '@angular/core';

@Component({
	/* definiuje nazwę komponentu w HTML */
	selector: 'app-server',
	/* adres do componentu */
	templateUrl: './server.component.html'
})
export class ServerComponent {
	
	serverId: number = 10;
	serverStatus: string = 'offline';
	
	getServerStatus() {
		return this.serverStatus;
	}

}