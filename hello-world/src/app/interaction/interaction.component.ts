import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.css']
})
export class InteractionComponent implements OnInit {

  @Input() public parentData;
  @Output() public childEvent = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  fireEvent() {
    this.childEvent.emit('Data send from child component!');
  }

}
