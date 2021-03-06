import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import {
  AutocompleteModule, ChartModule, DaterangepickerModule, DropdownModule
} from '@shared/components';
import { FundService, FundSpkService } from '@shared/services';

import { ReportChartComponent } from './report-chart/report-chart.component';
import { ReportControlComponent } from './report-control/report-control.component';
import { ReportRoutingModule } from './report-routing.module';
import { ReportTableComponent } from './report-table/report-table.component';
import { ReportComponent } from './report.component';

@NgModule({
  declarations: [
    ReportComponent,
    ReportControlComponent,
    ReportChartComponent,
    ReportTableComponent
  ],
  imports: [
    CommonModule,
    DropdownModule,
    ReportRoutingModule,
    DaterangepickerModule,
    ChartModule,
    AutocompleteModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatSnackBarModule
  ],
  providers: [
    DatePipe,
    { provide: FundService, useClass: FundSpkService }
  ]
})
export class ReportModule {
}
