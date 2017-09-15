import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SomeComp0Component } from './some-comp0.component';
import { AlertsService } from '../alerts/alerts.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SomeComp0Component],
  exports: [SomeComp0Component],
  providers: [AlertsService]
})
export class SomeComp0Module {}
