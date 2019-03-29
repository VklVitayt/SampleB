import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Simple1Component } from './components/simple1/simple1.component';
import { StatusCodesComponent } from './components/status-codes/status-codes.component';
import { StatusCodeComponent } from './components/status-codes/status-code/status-code.component';
import {StatusCodesService} from './services/status-codes.service';
import { StatusCodesPipe } from './pipes/status-codes.pipe';
import {MyColorOnDblClickDirective} from './derectives/my-color-on-dbl-click.directive';


@NgModule({
  declarations: [
    AppComponent,
    Simple1Component,
    StatusCodesComponent,
    StatusCodeComponent,
    StatusCodesPipe,
    MyColorOnDblClickDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [StatusCodesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
