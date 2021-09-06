import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AutocompleteModule } from './components/autocomplete/autocomplete.module';
import { ChartModule } from './components/chart/chart.module';
import { DaterangepickerModule } from './components/daterangepicker/daterangepicker.module';
import { DropdownModule } from './components/dropdown/dropdown.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ChartModule,
    DropdownModule,
    DaterangepickerModule,
    AutocompleteModule
  ],
  declarations: []
})
export class SharedModule { }
