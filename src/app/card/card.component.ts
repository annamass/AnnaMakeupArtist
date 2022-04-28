import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

@Input() titolo! : string;
@Input() descrizione! : string;
@Input() fotografia! : string;
@Input() btnLabel! :string;




  constructor() { }

  ngOnInit(): void {
  }

}
