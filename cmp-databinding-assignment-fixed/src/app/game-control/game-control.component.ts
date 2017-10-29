import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

	//todo definicja emitera zwiększającego licznik
	@Output('intervalFired') intervalFired = new EventEmitter<number>(); 
	interval;
	lastNumber = 0;

  constructor() { }

  ngOnInit() {
  }

  //todo metody przechwytujace zdarzenia z buttonów i pushujące zdarzenia do parenta
  onStartGame(){ 
	this.interval = setInterval(() => {
        console.log("increment interval");
	      this.intervalFired.emit(this.lastNumber + 1);
	      this.lastNumber++;
	    }, 1000);
  }

  onStopGame(){ 
  	clearInterval(this.interval);
  }

}
