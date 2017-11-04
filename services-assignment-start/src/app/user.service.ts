import { Injectable } from '@angular/core';

import { CounterService } from './counter.service';

@Injectable()
export class UserService {

	//wstrzyknięcie serwisu do innego serwisu i (konieczne jest tutaj )
  constructor(private counterService: CounterService) {


   }

    activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];


  activateUser(id: number) {
  	this.counterService.incrementCounter();
  	 this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }

  deactivateUser(id: number) {
  	this.counterService.incrementCounter();
  	 this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);

  }

}
