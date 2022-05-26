import { CompactType, DisplayGrid, GridType } from 'angular-gridster2';

import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FundHistoryModel } from '@shared/models';
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
    this.isDataAvailable = true;

    // if (historyData) {
    //   this.groupByPeriod = this.setGroupByPeriod();

    //   this.setChartCategories(this.groupByPeriod);
    //   this.setChartData();
    //   this.isDataAvailable = true;
    // }
  }
  get datas() {
    return this._fundData;
  }

  groupByPeriod = [];

  options = {
    gridType: GridType.ScrollVertical,
    compactType: CompactType.None,
    margin: 10,
    outerMargin: true,
    outerMarginTop: null,
    outerMarginRight: null,
    outerMarginBottom: null,
    outerMarginLeft: null,
    useTransformPositioning: true,
    mobileBreakpoint: 640,
    useBodyForBreakpoint: false,
    minCols: 1,
    maxCols: 100,
    minRows: 1,
    maxRows: 100,
    maxItemCols: 100,
    minItemCols: 1,
    maxItemRows: 100,
    minItemRows: 1,
    maxItemArea: 2500,
    minItemArea: 1,
    defaultItemCols: 1,
    defaultItemRows: 1,
    fixedColWidth: 105,
    fixedRowHeight: 105,
    keepFixedHeightInMobile: false,
    keepFixedWidthInMobile: false,
    scrollSensitivity: 10,
    scrollSpeed: 20,
    enableEmptyCellClick: false,
    enableEmptyCellContextMenu: false,
    enableEmptyCellDrop: false,
    enableEmptyCellDrag: false,
    enableOccupiedCellDrop: false,
    emptyCellDragMaxCols: 50,
    emptyCellDragMaxRows: 50,
    ignoreMarginInRow: false,
    draggable: {
      enabled: true
    },
    resizable: {
      enabled: true
    },
    swap: false,
    pushItems: true,
    disablePushOnDrag: false,
    disablePushOnResize: false,
    pushDirections: { north: true, east: true, south: true, west: true },
    pushResizeItems: false,
    displayGrid: DisplayGrid.Always,
    disableWindowResize: false,
    disableWarnings: false,
    scrollToNewItems: false
  };

  items = [{ cols: 2, rows: 1, y: 0, x: 0 },
  { cols: 2, rows: 1, y: 0, x: 0 },
  { cols: 2, rows: 1, y: 0, x: 0 },
  {
    cols: 2, rows: 1, y: 0, x: 0, dragEnabled: true,
    resizeEnabled: true,
  }];

  displayData = {
    "chart": {
      "theme": "fusion",
      "caption": "Number of visitors last week",
      "subCaption": "Bakersfield Central vs Los Angeles Topanga",
      "xAxisName": "Day"
    },
    "categories": [
      {
        "category": [
          {
            "label": "Mon"
          },
          {
            "label": "Tue"
          },
          {
            "label": "Wed"
          },
          {
            "vline": "true",
            "lineposition": "0",
            "color": "#62B58F",
            "labelHAlign": "center",
            "labelPosition": "0",
            "label": "National holiday",
            "dashed": "1"
          },
          {
            "label": "Thu"
          },
          {
            "label": "Fri"
          },
          {
            "label": "Sat"
          },
          {
            "label": "Sun"
          }
        ]
      }
    ],
    "dataset": [
      {
        "seriesname": "Bakersfield Central",
        "data": [
          {
            "value": "15123"
          },
          {
            "value": "14233"
          },
          {
            "value": "25507"
          },
          {
            "value": "9110"
          },
          {
            "value": "15529"
          },
          {
            "value": "20803"
          },
          {
            "value": "19202"
          }
        ]
      },
      {
        "seriesname": "Los Angeles Topanga",
        "data": [
          {
            "value": "13400"
          },
          {
            "value": "12800"
          },
          {
            "value": "22800"
          },
          {
            "value": "12400"
          },
          {
            "value": "15800"
          },
          {
            "value": "19800"
          },
          {
            "value": "21800"
          }
        ]
      }
    ],
    "trendlines": [
      {
        "line": [
          {
            "startvalue": "17022",
            "color": "#62B58F",
            "valueOnRight": "1",
            "displayvalue": "Average"
          }
        ]
      }
    ]
  }

  isDataAvailable: boolean = true;
  private _fundData: FundHistoryModel[];

  constructor(private datePipe: DatePipe) { }

  itemChange(item, itemComponent) {
    console.info('itemChanged', item, itemComponent);
  }

  itemResize(item, itemComponent) {
    console.info('itemResized', item, itemComponent);
  }


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
  // private setChartCategories(groupByPeriod) {
  //   this.displayData.categories[0].category = groupByPeriod
  //     .map((group) => {
  //       return {
  //         label: this.datePipe.transform(group[0].Tarih, 'dd-MM-yyyy')
  //       };
  //     });
  // }

  // private setChartData() {
  //   // Calculate Average Values
  //   const avgValues = this.groupByPeriod.map((group) => {
  //     return ReportStatics.REPORT_CHART_VIEW_FEATURES.map((name) => {
  //       const sum = Object.values(group).reduce((accumulator, curr) => accumulator + curr[name], 0) as number;
  //       return {
  //         seriesname: name,
  //         value: sum / group.length
  //       };
  //     });
  //   });

  //   // Set Values For Chart Data
  //   this.displayData.dataset = ReportStatics.REPORT_CHART_VIEW_FEATURES.map((seriesname) => {
  //     const dataSeries = avgValues.map((value) => value.find((val) => val.seriesname === seriesname))
  //       .map((val) => { return { value: val.value * 10 } });

  //     return {
  //       seriesname,
  //       data: dataSeries
  //     };
  //   });
  // }
}
