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
  @Output() startDateChange = new EventEmitter<Date>();
  @Output() endDateChange = new EventEmitter<Date>();

  @Input() startDate: Date;
  @Input() endDate: Date;
  @Input() maxDate: Date;
  @Input() minDate: Date;
  @Input() label: string;

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
