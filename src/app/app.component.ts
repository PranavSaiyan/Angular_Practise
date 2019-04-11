import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user1Activated = false;
  user2Activated = false;
  constructor(private usrserv: UsersService) { }
  ngOnInit() {
    this.usrserv.userActivated.subscribe((id: number) => {
      if (id === 1) {
        this.user1Activated = true;
      } else if (id === 2) {
        this.user2Activated = true;
      }
    });
  }
}
