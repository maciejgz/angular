import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {

	//obiekt wystawiony do uzupelniania przez parenta
	@Input('odd_value') odd_value: string;

  constructor() { }

  ngOnInit() {
  }

}
