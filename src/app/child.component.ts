import {Component} from '@angular/core';


@Component ({
  selector:'app-child', 
  template: '<button class="btn btn-primary" (click)="childFunction()">Click</button>'
  })
export class ChildComponent {

childFunction(){
  console.log("Button is clicked in child componet");
}

}