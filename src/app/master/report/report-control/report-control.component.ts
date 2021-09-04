import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  DropdownFundsModel, DropdownModel, Fund, FundFilterModel, FundHistoryModel
} from '@shared/models';
import { FundService } from '@shared/services';
import { ReportStatics } from '@shared/statics';

@Component({
  selector: 'app-report-control',
  templateUrl: './report-control.component.html',
  styleUrls: ['./report-control.component.scss']
})
export class ReportControlComponent implements OnInit {
  @Output() selectedFundFiltersChange = new EventEmitter<FundFilterModel>();
  dropdownFunds: DropdownFundsModel[];

  selectedFund: DropdownModel;
  selectedFundType: DropdownModel;
  selectedFundHistory: FundHistoryModel[];
  selectedStartDate: Date;
  selectedEndDate: Date;

  ReportStatics = ReportStatics;

  constructor(private fundService: FundService) { }

  ngOnInit(): void { }

  selectedFundFiltersChanged() {
    this.selectedFundFiltersChange.emit({
      fundCode: this.selectedFund?.uniqueId,
      fundType: this.selectedFundType?.uniqueId,
      startDate: this.selectedStartDate,
      endDate: this.selectedEndDate
    } as FundFilterModel);
  }

  selectedFundTypeChanged(fundType: DropdownModel) {
    this.selectedFund = null;
    this.getFunds(fundType.uniqueId);
  }

  selectedFundChanged(fund: DropdownModel) {
    this.selectedFund = fund;
  }

  getFunds(fundType: string) {
    this.fundService.getFunds(fundType).subscribe((funds: Fund[]) => {
      this.dropdownFunds = funds.map((fund) => {
        return {
          uniqueId: fund.Kodu,
          renderText: fund.Kodu + ' - ' + fund.Adi,
          type: fund.Tipi
        } as DropdownFundsModel
      });
    });
  }
}
