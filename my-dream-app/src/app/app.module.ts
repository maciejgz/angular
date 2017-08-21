import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
/* import własnego komponentu. bez .ts na końcu */
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

/* appmodule przechowuje wszystkie moduły aplikacji i zawiera info o wszystkich funkcjonalnościach. nie ma skanowania komponentów w systemie. trzeba wszystko ręcznie zadeklarować */
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent
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
