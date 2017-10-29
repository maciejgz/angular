import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // tworzenie obiektu ze zdefiniowaną zawartością - ten obiekt jest dostępny jedynie wewnątrz tego komponentu. do udostępniania obiektów na zewnątrz potrzebny jest dekorator @Input
 serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test!'}];


 onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
   this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
  	});
  }

  onChangeFirst(){
    this.serverElements[0].name = 'Changed!';
  }

/*
usuwanie elementu
*/
    onDestroyFirst(){
    this.serverElements.splice(0);
  }

}
