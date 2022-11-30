import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})

export class CalendarComponent implements OnInit {

  @Output() $emitGift:EventEmitter<any> = new EventEmitter();

  public todayDate: string = "";
  public days = [
    {
      id: "2",
      img:"../../assets/images/foto_1.jpeg",
      isOpen: false,
      value: "2022-12-02"
    },
    {
      id: "23",
      img:"../../assets/images/foto_2.jpeg",
      isOpen: false,
      value: "2022-12-23"
    },
    {
      id: "13",
      img:"../../assets/images/foto_3.jpeg",
      isOpen: false,
      value: "2022-12-13"
    },
    {
      id: "6",
      img:"../../assets/images/foto_4.jpeg",
      isOpen: false,
      value: "2022-12-06"
    },
    {
      id: "10",
      img:"../../assets/images/foto_5.jpeg",
      isOpen: false,
      value: "2022-12-10"
    },
    {
      id: "5",
      img:"../../assets/images/foto_6.jpeg",
      isOpen: false,
      value: "2022-12-05"
    },
    {
      id: "22",
      img:"../../assets/images/foto_7.jpeg",
      isOpen: false,
      value: "2022-12-22"
    },
    {
      id: "14",
      img:"../../assets/images/foto_8.jpeg",
      isOpen: false,
      value: "2022-12-14"
    },
    {
      id: "18",
      img:"../../assets/images/foto_9.jpeg",
      isOpen: false,
      value: "2022-12-18"
    },
    {
      id: "11",
      img:"../../assets/images/foto_10.jpeg",
      isOpen: false,
      value: "2022-12-11"
    },
    {
      id: "16",
      img:"../../assets/images/foto_11.jpeg",
      isOpen: false,
      value: "2022-12-16"
    },
    {
      id: "8",
      img:"../../assets/images/foto_12.jpeg",
      isOpen: false,
      value: "2022-12-08"
    },
    {
      id: "20",
      img:"../../assets/images/foto_13.jpeg",
      isOpen: false,
      value: "2022-12-20"
    },
    {
      id: "19",
      img:"../../assets/images/foto_14.jpeg",
      isOpen: false,
      value: "2022-12-19"
    },
    {
      id: "3",
      img:"../../assets/images/foto_15.jpeg",
      isOpen: false,
      value: "2022-12-03"
    },
    {
      id: "24",
      img:"../../assets/images/foto_16.jpeg",
      isOpen: false,
      value: "2022-12-24"
    },
    {
      id: "9",
      img:"../../assets/images/foto_17.jpeg",
      isOpen: false,
      value: "2022-12-09"
    },
    {
      id: "15",
      img:"../../assets/images/foto_18.jpeg",
      isOpen: false,
      value: "2022-12-15"
    },
    {
      id: "4",
      img:"../../assets/images/foto_19.jpeg",
      isOpen: false,
      value: "2022-12-04"
    },
    {
      id: "17",
      img:"../../assets/images/foto_20.jpeg",
      isOpen: false,
      value: "2022-12-17"
    },
    {
      id: "1",
      img:"../../assets/images/foto_21.jpeg",
      isOpen: false,
      value: "2022-12-01",
      pdf:"IL_TIPO_DI_PELLE.pdf"
    },
    {
      id: "7",
      img:"../../assets/images/foto_22.jpeg",
      isOpen: false,
      value: "2022-12-07"
    },
    {
      id: "12",
      img:"../../assets/images/foto_23.jpeg",
      isOpen: false,
      value: "2022-12-12"
    },
    {
      id: "21",
      img:"../../assets/images/foto_24.jpeg",
      isOpen: false,
      value: "2022-12-21",
      pdf:"TRATTAMENTI_ESTETICI.pdf"
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
    this.todayDate = "2022-12-03";
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

  emitGift(cardData:any){
    this.$emitGift.emit(cardData);
  }

}
