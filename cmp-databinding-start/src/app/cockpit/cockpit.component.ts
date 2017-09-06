import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
    newServerName = '';
  newServerContent = '';
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
    this.serverCreated.emit({serverName: nameInput.value,
     serverContent: this.newServerContent});
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    /** 
    Przekazanie obiektów do emit eventu
    */
   this.blueprintCreated.emit({serverName: nameInput.value,
     serverContent: this.newServerContent});
  }

}
