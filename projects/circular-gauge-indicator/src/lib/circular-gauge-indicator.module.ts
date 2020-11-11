import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CircularGaugeIndicatorComponent } from './circular-gauge-indicator.component';

@NgModule({
  declarations: [CircularGaugeIndicatorComponent],
  imports: [
    CommonModule
  ],
  exports: [CircularGaugeIndicatorComponent]
})
export class CircularGaugeIndicatorModule { }
