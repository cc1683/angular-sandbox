import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
              <div class="container">
                <div class="mt-2">
                  <p>Welcome {{ users }}</p>
                  <input type="text" value="Username" [disabled]="isValid">
                  <input type="submit" value="Enable input field" (click)="validateUser()" class="btn btn-success btn-sm">
                </div>
                <div class=" mt-2">
                  <p [class]="successClass">Class binding example</p>
                </div>
                <div class="mt-2">
                  <p [class.text-danger]="hasError">Determine the class attribute</p>
                  <input type="submit" value="Change the font color" (click)="errorFont()" class="btn btn-success btn-sm">
                </div>
                <div class="mt-2">
                  <p [ngClass]="messageClasses">Multiple class example, bind via object</p>
                </div>
                <div class="mt-2">
                  <h3>Event Binding</h3>
                  <button class="btn btn-sm btn-info" (click)="greeting()" [disabled] = "isDisabled">Greeting</button>
                  <p class="lead">{{ greetingMessage }}</p>
                </div>
                <div class="mt-2">
                  <h3>Template Reference Variable</h3>
                  <input type="text" #userMessage>
                  <button class="btn btn-sm btn-info" (click)="showMessage(userMessage.value)" >Show message</button>
                  <p class="lead"> {{ userMessage.value }} </p>
                </div>
              </div>
            `,
  styles: [`
    input {
      margin: 0.25em;
    };
    .text-success {
      color: green;
    }
    .text-danger {
      color: red;
    }
    .text-special {
      font-style: italic;
    }
  `
  ]
})
export class TestComponent implements OnInit {
  public users = "John Doe";
  public isValid = true;
  public successClass = "text-success";
  public specialText = "text-special";
  public hasError = true;
  public isDisabled = false;

  public greetingMessage = '';

  public messageClasses = {
    "text-success" : !this.hasError,
    "text-danger" : this.hasError,
    "text-special" : this.specialText
  };

  constructor() { }

  ngOnInit() {
  }

  validateUser() {
    this.isValid = false;
  }

  errorFont() {
    this.hasError = !this.hasError;
  }

  greeting() {
    this.greetingMessage = 'Welcome to Angular 7 tutorial!';
    this.isDisabled = true;
  }

  showMessage(msg) {
    console.log(msg)
  }

}
