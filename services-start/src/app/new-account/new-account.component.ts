import { Component, EventEmitter, Output } from '@angular/core';

import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

//tutaj odbywa się injection serwisu. w konstruktorze
// angular odpowiada za tworzenie obiektów
// do wstrzykiwania potrzebujemy providera
constructor(private loggingService: LoggingService) {

}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });

    //utworzenie obiektu serwisu to jest bardzo złe podejście
    //const service = new LoggingService();

    //podejście z wstrzykniętym obiektem
    this.loggingService.logStatusChange(accountStatus);
   }
}
