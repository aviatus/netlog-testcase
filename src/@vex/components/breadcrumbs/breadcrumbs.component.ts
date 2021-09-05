import { Component, Input, OnInit } from '@angular/core';
import icHome from '@iconify/icons-ic/twotone-home';

import { trackByValue } from '../../utils/track-by';

@Component({
  selector: 'vex-breadcrumbs',
  template: `
    <div class="flex items-center">
      <vex-breadcrumb>
        <a [routerLink]="['/']">
          <ic-icon class="text-hint" [icon]="icHome" inline="true" size="20px"></ic-icon>
        </a>
      </vex-breadcrumb>
      <ng-container *ngFor="let crumb of crumbs; trackBy: trackByValue">
        <vex-breadcrumb>
          <a [routerLink]="[]">{{ crumb }}</a>
        </vex-breadcrumb>
      </ng-container>
    </div>
  `
})
export class BreadcrumbsComponent implements OnInit {

  @Input() crumbs: string[] = [];

  trackByValue = trackByValue;
  icHome = icHome;

  constructor() {
  }

  ngOnInit() {
  }
}
