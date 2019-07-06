import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from 'app/app.component';
import { HelloComponent } from 'app/hello.component';
import { ChildComponent } from 'app/child.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,ChildComponent ],
  bootstrap:    [ AppComponent,ChildComponent ]
})
export class AppModule { }
