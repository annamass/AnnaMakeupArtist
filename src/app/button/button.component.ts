import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  @Input() public btnType:string = '';
  @Output() public btnClick:EventEmitter<MouseEvent> = new EventEmitter();
  ngOnInit(): void {
  }

  buttonClick(event:MouseEvent){
    this.btnClick.emit(event);
  }

}
