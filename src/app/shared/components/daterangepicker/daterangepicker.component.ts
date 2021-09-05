import {
  ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-daterangepicker',
  templateUrl: './daterangepicker.component.html',
  styleUrls: ['./daterangepicker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DaterangepickerComponent implements OnInit {
  @Output('startDateChange') startDateChange = new EventEmitter<Date>();
  @Output('endDateChange') endDateChange = new EventEmitter<Date>();

  @Input('startDate') startDate: Date;
  @Input('endDate') endDate: Date;
  @Input('maxDate') maxDate: Date;
  @Input('minDate') minDate: Date;
  @Input('label') label: string;

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  constructor() { }

  ngOnInit(): void { }

  startDateChanged(date: Date) {
    this.startDateChange.emit(date);
  }

  endDateChanged(date: Date) {
    this.endDateChange.emit(date);
  }
}
