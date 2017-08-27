import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
/* import własnego komponentu. bez .ts na końcu */
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessMessageComponent } from './success-message/success-message.component';
import { WarningMessageComponent } from './warning-message/warning-message.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { NameInputComponent } from './name-input/name-input.component';

/* appmodule przechowuje wszystkie moduły aplikacji i zawiera info o wszystkich funkcjonalnościach. nie ma skanowania komponentów w systemie. trzeba wszystko ręcznie zadeklarować */
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessMessageComponent,
    WarningMessageComponent,
    ErrorMessageComponent,
    NameInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
