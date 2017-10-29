import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {




	/**
	TODO:
	Bind it!
Create three new components: GameControl, Odd and Even
The GameControl Component should have buttons to start and stop the game
When starting the game, an event (holding a incrementing number) should get emitted each second (ref = setInterval())
The event should be listenable from outside the component
When stopping the game, no more events should get emitted (clearInterval(ref))
A new Odd component should get created for every odd number emitted, the same should happen for the Even Component (on even numbers)
Simply output Odd - NUMBER or Even - NUMBER in the two components
Style the element (e.g. paragraph) holding your output text differently in both components


	*/

	oddValues = [];
	evenValues = [];


	onIntervalFired(counter: number) {
		console.log("increment counter:"  + counter );

		if(counter%2 ===0) {

		this.oddValues.push(counter);
		} else {

		this.evenValues.push(counter);
		}
	}

	


}
