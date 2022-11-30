import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-user',
  templateUrl: './welcome-user.component.html',
  styleUrls: ['./welcome-user.component.scss']
})
export class WelcomeUserComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToCalendar(){
    this.router.navigate(["/advent-calendar"]);
  }

}
