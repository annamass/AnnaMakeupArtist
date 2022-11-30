import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface CardState {
  imageId: string;
  state: 'default' | 'flipped' | 'matched';
}

export interface CardData {
  id: string;
  img: string;
  value: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('cardFlip', [
      state('default', style({
        transform: 'none'
      })),
      state('flipped', style({
        transform: 'rotateY(180deg)'
      })),
      transition('default => flipped', [
        animate('400ms')
      ]),
      transition('flipped => default', [
        animate('200ms')
      ])
    ])
  ]
})
export class CardComponent implements OnInit {

  data: CardState = {
    imageId: "pDGNBK9A0sk",
    state: "default"
  };

  @Input() cardData!: CardData;
  @Input() todayDate!:string;
  @Output() emitCardClick:EventEmitter<any> = new EventEmitter();
  @Output() emitGiftDate : EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  cardClicked(dateValue: string) {
    if (this.todayDate === dateValue) {
      if (this.data.state === "default") {
        this.data.state = "flipped";
        this.emitCardClick.emit(true);
      } else {
        this.data.state = "default";
      }
    }
  }

  onDiscoverGift(cardData:any){
    this.emitGiftDate.emit(cardData);
  }

}
