import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  @Input() data: object[];
  @Input() chartConfig = {
    width: '100%',
    height: '500',
    type: 'msline',
    dataFormat: 'json'
  };

  constructor() { }

}
