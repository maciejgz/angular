import { Component } from '@angular/core';

import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
 

//tutaj odbywa się injection serwisu. w konstruktorze
// angular odpowiada za tworzenie obiektów
// do wstrzykiwania potrzebujemy providera
constructor(private loggingService: LoggingService,
  private accountService: AccountService) {

}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);

    //utworzenie obiektu serwisu to jest bardzo złe podejście
    //const service = new LoggingService();

    //podejście z wstrzykniętym obiektem
    this.loggingService.logStatusChange(accountStatus);
   }
}
