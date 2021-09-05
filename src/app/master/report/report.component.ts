import { Subscription } from 'rxjs';

import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Fund, FundFilterModel, FundHistoryModel } from '@shared/models';
import { FundService } from '@shared/services';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit, OnDestroy {
  selectedFundHistory: FundHistoryModel[];
  selectedViewPeriod: string;
  funds: Fund[];
  fundFilter: FundFilterModel;
  disabledColumns = ['FonKodu', 'FonUnvani', 'FonTipi', 'FonTuru', 'ToplamDeger', 'BirimPayDegeri', 'DolasimdakiPaySayisi', 'YatirimciSayisi'];
  subscriptions: Subscription[] = [];

  constructor(private fundService: FundService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void { }

  getFunds(fundType: string) {
    this.subscriptions.push(this.fundService.getFunds(fundType).subscribe((funds: Fund[]) => this.funds = funds));
  }

  getFundHistory(fundCode: string, fundType: string, startDate: Date, endDate: Date) {
    this.subscriptions.push(this.fundService.getFundHistory(fundCode, fundType, startDate, endDate).subscribe((fundHistory: FundHistoryModel[]) => {
      this.selectedFundHistory = fundHistory;
    }));
  }

  selectedFundTypeChanged(fundType: string) {
    this.getFunds(fundType);
  }

  selectedFundFiltersChanged(fundFilter: FundFilterModel) {
    this.fundFilter = fundFilter;
    this.selectedViewPeriod = fundFilter.period;
    this.cdr.detectChanges();
    if (!fundFilter.ready) return;
    this.getFundHistory(fundFilter.fundCode, fundFilter.fundType, fundFilter.startDate, fundFilter.endDate);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
