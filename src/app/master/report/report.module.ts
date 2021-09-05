import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import {
  AutocompleteModule, ChartModule, DaterangepickerModule, DropdownModule, TableModule
} from '@shared/components';
import { FundService, FundSpkService } from '@shared/services';

import { ReportChartComponent } from './report-chart/report-chart.component';
import { ReportControlComponent } from './report-control/report-control.component';
import { ReportComponent } from './report.component';

@NgModule({
  declarations: [
    ReportComponent,
    ReportControlComponent,
    ReportChartComponent
  ],
  imports: [
    DropdownModule,
    DaterangepickerModule,
    ChartModule,
    TableModule,
    AutocompleteModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule
  ],
  providers: [
    { provide: FundService, useClass: FundSpkService }
  ]
})
export class ReportModule {
}
