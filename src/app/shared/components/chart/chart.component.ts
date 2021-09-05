import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartComponent implements OnInit, OnChanges {
  @Input('data') data: Object[];
  @Input('chartConfig') chartConfig = {
    width: '100%',
    height: '500',
    type: 'msline',
    dataFormat: 'json'
  };

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() { }
}
