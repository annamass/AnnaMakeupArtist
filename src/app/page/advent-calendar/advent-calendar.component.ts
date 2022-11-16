import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advent-calendar',
  templateUrl: './advent-calendar.component.html',
  styleUrls: ['./advent-calendar.component.scss']
})
export class AdventCalendarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.checkUser();
  }

  checkUser(){
    if(!localStorage.getItem("jwt")){
      this.router.navigate(["/register"],{
        queryParams:{
          registerToShowAdventCalendar:true
        }
      })
    }
  }

}
