import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FundHistoryModel } from '@shared/models';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartComponent implements OnInit {
  @Input('data') set datas(historyData: FundHistoryModel[]) {
    this._data = historyData;

    if (historyData) {
      let dataSeries = Object.keys(historyData[0]);
      this.displayData.subcaption = historyData[0].FonKodu;
      this.displayData.dataset = dataSeries.filter((data, index) => index > 8).map((subData) => {
        return { seriesname: subData, data: [] }
      });
      // historyData.forEach()
      console.log(this.displayData);
    }
  }
  get datas() {
    return this._data;
  }
  private _data;

  displayData = {
    chart: {
      caption: "Fon Detay Analizi",
      subcaption: '',
      showhovereffect: "1",
      numbersuffix: "%",
      drawcrossline: "1",
      theme: "fusion"
    },
    dataset: []
  } as any;
  type = "msline";
  dataFormat = "json";

  data = {
    chart: {
      caption: "Fon Detay Analizi",
      showhovereffect: "1",
      numbersuffix: "%",
      drawcrossline: "1",
      theme: "fusion"
    },
    categories: [
      {
        category: [
          {
            label: "2012"
          },
          {
            label: "2013"
          },
          {
            label: "2014"
          },
          {
            label: "2015"
          },
          {
            label: "2016"
          }
        ]
      }
    ],
    dataset: [
      {
        seriesname: "Facebook",
        data: [
          {
            value: "62"
          },
          {
            value: "64"
          },
          {
            value: "64"
          },
          {
            value: "66"
          },
          {
            value: "78"
          }
        ]
      },
      {
        seriesname: "Instagram",
        data: [
          {
            value: "16"
          },
          {
            value: "28"
          },
          {
            value: "34"
          },
          {
            value: "42"
          },
          {
            value: "54"
          }
        ]
      },
      {
        seriesname: "LinkedIn",
        data: [
          {
            value: "20"
          },
          {
            value: "22"
          },
          {
            value: "27"
          },
          {
            value: "22"
          },
          {
            value: "29"
          }
        ]
      },
      {
        seriesname: "Twitter",
        data: [
          {
            value: "18"
          },
          {
            value: "19"
          },
          {
            value: "21"
          },
          {
            value: "21"
          },
          {
            value: "24"
          }
        ]
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
