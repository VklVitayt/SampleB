import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Simple1Component } from './components/simple1/simple1.component';
import { StatusCodesComponent } from './components/status-codes/status-codes.component';
import { StatusCodeComponent } from './components/status-codes/status-code/status-code.component';
import {StatusCodesService} from './services/status-codes.service';

@NgModule({
  declarations: [
    AppComponent,
    Simple1Component,
    StatusCodesComponent,
    StatusCodeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [StatusCodesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
