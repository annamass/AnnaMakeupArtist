import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})

export class CalendarComponent implements OnInit {

  public todayDate: string = "";
  public days = [
    {
      id: "2",
      isOpen: false,
      value: "2022-12-02"
    },
    {
      id: "23",
      isOpen: false,
      value: "2022-12-23"
    },
    {
      id: "13",
      isOpen: false,
      value: "2022-12-13"
    },
    {
      id: "6",
      isOpen: false,
      value: "2022-12-06"
    },
    {
      id: "10",
      isOpen: false,
      value: "2022-12-10"
    },
    {
      id: "5",
      isOpen: false,
      value: "2022-12-05"
    },
    {
      id: "22",
      isOpen: false,
      value: "2022-12-22"
    },
    {
      id: "14",
      isOpen: false,
      value: "2022-12-14"
    },
    {
      id: "18",
      isOpen: false,
      value: "2022-12-18"
    },
    {
      id: "11",
      isOpen: false,
      value: "2022-12-11"
    },
    {
      id: "16",
      isOpen: false,
      value: "2022-12-16"
    },
    {
      id: "8",
      isOpen: false,
      value: "2022-12-08"
    },
    {
      id: "20",
      isOpen: false,
      value: "2022-12-20"
    },
    {
      id: "19",
      isOpen: false,
      value: "2022-12-19"
    },
    {
      id: "3",
      isOpen: false,
      value: "2022-12-03"
    },
    {
      id: "24",
      isOpen: false,
      value: "2022-12-24"
    },
    {
      id: "9",
      isOpen: false,
      value: "2022-12-09"
    },
    {
      id: "15",
      isOpen: false,
      value: "2022-12-15"
    },
    {
      id: "4",
      isOpen: false,
      value: "2022-12-04"
    },
    {
      id: "17",
      isOpen: false,
      value: "2022-12-17"
    },
    {
      id: "1",
      isOpen: false,
      value: "2022-12-01"
    },
    {
      id: "7",
      isOpen: false,
      value: "2022-12-07"
    },
    {
      id: "12",
      isOpen: false,
      value: "2022-12-12"
    },
    {
      id: "21",
      isOpen: false,
      value: "2022-12-21"
    }
  ]

  constructor(public dialog: MatDialog,private router:Router) {
  }

 

  ngOnInit(): void {
    this.setTodayDate();
  }

  setTodayDate() {
    // let today = new Date().toJSON();
    // this.todayDate = today.split("T")[0];
    this.todayDate = "2022-12-16";
  }

  openDayContent(index:number,dayContent: { id: string, value: string, isOpen: boolean }) {
    if(dayContent.value === this.todayDate){
      this.days[index].isOpen = true;
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
