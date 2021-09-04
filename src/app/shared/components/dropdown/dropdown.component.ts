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
  @Output('selectedItemChange') selectedItemChange = new EventEmitter<DropdownModel>();
  @Output('filterTextChange') filterTextChange = new EventEmitter<string>();

  @Input('label') label: string;
  @Input('items') items: Array<DropdownModel>;
  @Input('selectedItem') selectedItem: DropdownModel;
  @Input('filterText') filterText: string;
  @Input('disabled') disabled: boolean = false;

  constructor() { }

  ngOnInit() { }

  selectedItemChanged(item: DropdownModel) {
    this.selectedItemChange.emit(item);
  }
}
