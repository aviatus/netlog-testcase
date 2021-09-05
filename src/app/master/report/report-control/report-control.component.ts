import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  DropdownFundsModel, DropdownModel, Fund, FundFilterModel, FundHistoryModel
} from '@shared/models';
import { ReportStatics } from '@shared/statics';

@Component({
  selector: 'app-report-control',
  templateUrl: './report-control.component.html',
  styleUrls: ['./report-control.component.scss']
})
export class ReportControlComponent implements OnInit {
  @Output() selectedFundFiltersChange = new EventEmitter<FundFilterModel>();
  @Output() selectedFundTypeChange = new EventEmitter<string>();

  @Input() set funds(funds: Fund[]) {
    this._funds = funds;

    if (funds) {
      this.dropdownFunds = funds.map((fund) => {
        return {
          uniqueId: fund.Kodu,
          renderText: fund.Kodu + ' - ' + fund.Adi,
          type: fund.Tipi
        } as DropdownFundsModel
      });
    }
  }
  get funds() {
    return;
  }

  selectedFund: DropdownModel;
  selectedFundType: DropdownModel;
  selectedFundHistory: FundHistoryModel[];
  selectedStartDate: Date;
  selectedEndDate: Date;
  selectedPeriod = ReportStatics.REPORT_TIME_PERIOD_DROPDOWN_TYPES[1];

  dropdownFunds: DropdownFundsModel[];
  maxDate: Date = new Date();
  minDate = new Date(2021, 0, 1);

  ReportStatics = ReportStatics;

  private _funds: Fund[];

  constructor() { }

  ngOnInit(): void { }

  selectedFundFiltersChanged() {
    this.selectedFundFiltersChange.emit({
      fundCode: this.selectedFund?.uniqueId,
      fundType: this.selectedFundType?.uniqueId,
      startDate: this.selectedStartDate,
      endDate: this.selectedEndDate,
      period: this.selectedPeriod.uniqueId,
      ready: this.selectedFund && this.selectedFundType && this.selectedStartDate && this.selectedEndDate ? true : false
    } as FundFilterModel);
  }

  selectedFundTypeChanged(fundType: DropdownModel) {
    this.selectedFund = null;
    this.selectedFundType = fundType;
    this.selectedFundTypeChange.emit(fundType.uniqueId)
  }

  selectedFundChanged(fund: DropdownModel) {
    this.selectedFund = fund;
  }

  selectedPeriodChanged(period: DropdownModel) {
    this.selectedPeriod = period;
  }
}
