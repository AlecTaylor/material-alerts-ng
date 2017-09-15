import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SomeComp1Component } from './some-comp1.component';
import { AlertsService } from '../alerts/alerts.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SomeComp1Component],
  exports: [SomeComp1Component],
  providers: [AlertsService]
})
export class SomeComp1Module { }
