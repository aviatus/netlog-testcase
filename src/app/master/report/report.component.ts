import { Component, OnInit } from '@angular/core';
import { FundFilterModel, FundHistoryModel } from '@shared/models';
import { FundService } from '@shared/services';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  selectedFundHistory: FundHistoryModel[];

  constructor(private fundService: FundService) { }

  ngOnInit(): void { }

  selectedFundFiltersChanged(fundFilter: FundFilterModel) {
    console.log(fundFilter);
    this.getFundHistory(fundFilter.fundCode, fundFilter.fundType, fundFilter.startDate, fundFilter.endDate);
  }

  getFundHistory(fundCode: string, fundType: string, startDate: Date, endDate: Date) {
    this.fundService.getFundHistory(fundCode, fundType, startDate, endDate).subscribe((fundHistory: FundHistoryModel[]) => {
      this.selectedFundHistory = fundHistory;
      console.log(this.selectedFundHistory);
    });
  }
}
