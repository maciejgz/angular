import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {

	numberOfChanges: number = 0;

  constructor() { }

  incrementCounter(){
  	this.numberOfChanges = this.numberOfChanges + 1;
  	console.log('counter increased to ' + this.numberOfChanges);
  }

}
