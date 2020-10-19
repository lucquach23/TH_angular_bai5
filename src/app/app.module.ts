import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import {TutorialComponent} from './tutorial.component';
// import {myTest} from './myTest.component';
import {FormsModule} from '@angular/forms';
import { TestComponent } from './test/test.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    FormComponent,//TutorialComponent,myTest
  ],
  imports: [
    BrowserModule,FormsModule//, NgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
