import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SomeComp0Module } from './some-comp0/some-comp0.module';
import { SomeComp1Module } from './some-comp1/some-comp1.module';
import { AlertsModule } from './alerts/alerts.module';
import { AlertsService } from './alerts/alerts.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AlertsModule,
    SomeComp0Module, SomeComp1Module
  ],
  providers: [AlertsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
