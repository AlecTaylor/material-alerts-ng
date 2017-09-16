import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SomeComp0Component } from './some-comp0.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SomeComp0Component],
  exports: [SomeComp0Component]
})
export class SomeComp0Module {}
