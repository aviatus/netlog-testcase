

import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FundHistoryModel } from '@shared/models';

interface Ahmet {
  a: string;
  b: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {
  @Input() disabledColumns: string[];
  @Input() set data(data: FundHistoryModel[]) {
    this._data = data;

    if (data) {
      this.displayedColumns = Object.keys(data[0]).filter((column) => !this.disabledColumns.includes(column));
    }
  }
  get data(): FundHistoryModel[] {
    return this._data;
  }

  displayedColumns: string[] = [];

  private _data: FundHistoryModel[];

  constructor() { }

  ngOnInit(): void { }
}
