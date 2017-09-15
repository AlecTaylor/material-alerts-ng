import { Injectable } from '@angular/core';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';

@Injectable()
export class AlertsService {
  alerts: string[];

  constructor(private snackBar: MdSnackBar) {
    this.alerts = [];
  }

  public add(alert: string, action?: string, config?: MdSnackBarConfig) {
    this.alerts.push(alert);
    // console.warn('AlertsService::alerts =', this.alerts, ';');
    this.snackBar.open(alert, action, config);
  }
}
