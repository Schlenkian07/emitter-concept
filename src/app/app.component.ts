import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: '<app-child></app-child>',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
}
