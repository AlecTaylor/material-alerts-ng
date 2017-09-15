import { Component, AfterViewInit } from '@angular/core';

import { AlertsService } from '../alerts/alerts.service';

@Component({
  selector: 'app-some-comp1',
  templateUrl: './some-comp1.component.html',
  styleUrls: ['./some-comp1.component.css']
})
export class SomeComp1Component implements AfterViewInit {
  constructor(private alertsService: AlertsService) { }

  ngAfterViewInit() {
    this.alertsService.add('SomeComp1Component alert');
  }
}
