import { Component, OnInit } from '@angular/core';

/**
  UserService dodany na poziomie app.component oznacza, że ta sama instancja będzie dostępna
  dla wszystkich childs komponentu
**/
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit {


  activeUsers: string[] = [];
  inactiveUsers: string[] = [];

  constructor(private userService: UserService) {
      this.activeUsers = this.userService.activeUsers;
      this.inactiveUsers = this.userService.inactiveUsers;
  }

  ngOnInit() {

  }

  onSetToInactive(id: number) {
    this.userService.deactivateUser(id);
  }

  onSetToActive(id: number) {
   this.userService.activateUser(id);
  }

  /**
Dodać dwa serwisy:
  - jeden do obsługi listy (dodawanie-usuwanie userow z active i inactive list
  - zliczanie zmian na listach. ile ich zostało zrobionych)
  **/
}
