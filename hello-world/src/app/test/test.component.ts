import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
              <div>
                <p>Welcome {{ users }}</p>
                <input type="text" value="Username" [disabled]="isValid">
                <input type="submit" (click)="validateUser()">
              </div>
            `,
  styles: [`
    input {
      margin: 0.25em;
    }
  `
  ]
})
export class TestComponent implements OnInit {
  public users = "John Doe";
  public isValid = true;

  constructor() { }

  ngOnInit() {
  }

  validateUser() {
    this.isValid = false;
  }

}
