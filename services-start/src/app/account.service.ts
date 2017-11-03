import { LoggingService } from './logging.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AccountService  {
	
		  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  statusUpdated = new EventEmitter<String>();

  constructor(private loggingService: LoggingService) {

  }

  addAccount(name: string, status: string) {

		this.accounts.push({name: name, status: status});
  }

  updateStatus(id: number, status: string) {
  	  this.loggingService.logStatusChange('Account added with status: ' + status);
 
		this.accounts[id].status = status;
  }
}