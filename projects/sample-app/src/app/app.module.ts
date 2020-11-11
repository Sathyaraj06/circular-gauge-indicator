import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//  import { CircularGaugeIndicatorModule } from 'projects/circular-gauge-indicator/src/public-api';
 import {CircularGaugeIndicatorModule} from 'circular-gauge-indicator'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CircularGaugeIndicatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
