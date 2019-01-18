import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.css']
})
export class InteractionComponent implements OnInit {

  @Input() public parentData;
  @Output() public childEvent = new EventEmitter();

  public name = "Steve Smith";
  public msg = "Welcome to Angular 7";
  public person = {
    "firstname": 'John',
    "lastname": 'Doe',
  };


  constructor() { }

  ngOnInit() {
  }

  fireEvent() {
    this.childEvent.emit('Data send from child component!');
  }

}
