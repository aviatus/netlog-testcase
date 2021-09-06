import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FundHistoryModel } from '@shared/models';
import { ReportStatics } from '@shared/statics';
import { FundUtil } from '@shared/utils';

@Component({
  selector: 'app-report-chart',
  templateUrl: './report-chart.component.html',
  styleUrls: ['./report-chart.component.scss']
})
export class ReportChartComponent {
  @Input() viewPeriod: string;
  @Input() set fundData(historyData: FundHistoryModel[]) {
    this._fundData = historyData;
    this.isDataAvailable = false;

    if (historyData) {
      this.groupByPeriod = this.setGroupByPeriod();

      this.setChartCategories(this.groupByPeriod);
      this.setChartData();
      this.isDataAvailable = true;
    }
  }
  get datas() {
    return this._fundData;
  }

  groupByPeriod = [];

  displayData = {
    chart: {
      caption: 'Fon Detay Analizi',
      subcaption: '',
      showhovereffect: '1',
      numbersuffix: '%',
      drawcrossline: '1',
      plottooltext: '<b>$dataValue</b> - $seriesName',
      theme: 'fusion'
    },
    categories: [
      {
        category: []
      }
    ]
  } as any;

  isDataAvailable: boolean;
  private _fundData: FundHistoryModel[];

  constructor(private datePipe: DatePipe) { }

  // Set Fund Data To Group For Period
  private setGroupByPeriod() {
    switch (this.viewPeriod) {
      case 'daily':
        return Object.values(FundUtil.setFundGroupByPeriod(this._fundData, 'D'));
      case 'weekly':
        return Object.values(FundUtil.setFundGroupByPeriod(this._fundData, 'w'));
      case 'monthly':
        return Object.values(FundUtil.setFundGroupByPeriod(this._fundData, 'M'));
    }
  }

  // Set Chart Categories For Dates
  private setChartCategories(groupByPeriod) {
    this.displayData.categories[0].category = groupByPeriod
      .map((group) => {
        return {
          label: this.datePipe.transform(group[0].Tarih, 'dd-MM-yyyy')
        };
      });
  }

  private setChartData() {
    // Calculate Average Values
    const avgValues = this.groupByPeriod.map((group) => {
      return ReportStatics.REPORT_CHART_VIEW_FEATURES.map((name) => {
        const sum = Object.values(group).reduce((accumulator, curr) => accumulator + curr[name], 0) as number;
        return {
          seriesname: name,
          value: sum / group.length
        };
      });
    });

    // Set Values For Chart Data
    this.displayData.dataset = ReportStatics.REPORT_CHART_VIEW_FEATURES.map((seriesname) => {
      const dataSeries = avgValues.map((value) => value.find((val) => val.seriesname === seriesname))
        .map((val) => { return { value: val.value * 10 } });

      return {
        seriesname,
        data: dataSeries
      };
    });
  }
}
