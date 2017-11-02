export class LoggingService {
	
	constructor() {
		// code...
	}

	logStatusChange(status: string){
		console.log('A server status changed, new status: ' + status);
 
	}
}