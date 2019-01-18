import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-struc',
  templateUrl: './struc.component.html',
  styleUrls: ['./struc.component.css']
})
export class StrucComponent implements OnInit {

  public show = false;
  public isShowing = true;
  public userId = 0;
  public bgColor = "red";
  public nameList = ['Alex', 'Bob', 'Cart', 'Downing'];

  constructor() { }

  ngOnInit() {
  }

  changeValue() {
    this.show = !this.show;
    this.isShowing = !this.isShowing;

    this.checkBtn();
  }

  checkBtn() {
    if(this.show == false) {
      document.getElementById('btn-status').innerHTML = "Show"
    } else {
      document.getElementById('btn-status').innerHTML = "Hide"
    }
  }

  switchUser(id) {
    if(id == 1) {
      this.userId = 1;
    } else {
      this.userId = 2;
    }
  }

  changeColor(color) {
    switch (color){
      case 'red':
        this.bgColor = 'red';
        break;
      case 'green':
        this.bgColor = 'green';
        break;
      case 'yellow':
        this.bgColor = 'yellow';
        break;
    }
  }

}
