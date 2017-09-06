import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerContent = '';
  // viewChild pozwala na dobrannie się do elementu z templatu w klasie - do konkretnego elemntu DOM 
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  /** event emitter pozwla na tworznei własnych eventów 
    Output pozwala na wyrzucenie typu obiektu zdarzenia jako obiekt $event
  **/
 @Output() serverCreated = new EventEmitter<{serverName: string, 
     serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, 
      serverContent: string}>();

  constructor() { }

  ngOnInit() {
  }

    onAddServer(nameInput: HTMLInputElement) {
      console.log(this.serverContentInput);
    this.serverCreated.emit({
      serverName: nameInput.value,
     serverContent: this.serverContentInput.nativeElement.value
   });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    /** 
    Przekazanie obiektów do emit eventu
    */
   this.blueprintCreated.emit({
     serverName: nameInput.value,
     serverContent: this.serverContentInput.nativeElement.value
   });
  }

}
