import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SomeComp1Component } from './some-comp1.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SomeComp1Component],
  exports: [SomeComp1Component]
})
export class SomeComp1Module {}
