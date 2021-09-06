import { Component, Input, OnInit } from '@angular/core';
import { FundHistoryModel } from '@shared/models';

@Component({
  selector: 'app-report-table',
  templateUrl: './report-table.component.html',
  styleUrls: ['./report-table.component.scss']
})
export class ReportTableComponent implements OnInit {
  @Input() disabledColumns: string[];
  @Input() set data(data: FundHistoryModel[]) {
    this._data = data;

    if (data) {
      this.displayedColumns = Object.keys(data[0]).filter((column) => !this.disabledColumns.includes(column));
      this.columnsToDisplay = [this.dateColumn, ...this.displayedColumns];
    }
  }
  get data(): FundHistoryModel[] {
    return this._data;
  }

  displayedColumns: string[] = [];
  columnsToDisplay: string[] = [];
  dateColumn = 'Tarih';

  private _data: FundHistoryModel[];

  constructor() { }

  ngOnInit(): void { }

}
