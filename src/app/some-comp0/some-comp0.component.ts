import { Component, AfterViewInit } from '@angular/core';

import { AlertsService } from '../alerts/alerts.service';

@Component({
  selector: 'app-some-comp0',
  templateUrl: './some-comp0.component.html',
  styleUrls: ['./some-comp0.component.css']
})
export class SomeComp0Component implements AfterViewInit {
  constructor(private alertsService: AlertsService) { }

  ngAfterViewInit() {
    this.alertsService.add('SomeComp0Component alert');
  }
}
