import {
  ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output
} from '@angular/core';

import { DropdownModel } from '../../models/dropdown.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent implements OnInit {
  @Output() selectedItemChange = new EventEmitter<DropdownModel>();
  @Output() filterTextChange = new EventEmitter<string>();

  @Input() label: string;
  @Input() items: Array<DropdownModel>;
  @Input() selectedItem: DropdownModel;
  @Input() filterText: string;

  constructor() { }

  ngOnInit() { }

  selectedItemChanged(item: DropdownModel) {
    this.selectedItemChange.emit(item);
  }
}
