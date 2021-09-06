import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { startWith } from 'rxjs/internal/operators/startWith';

import {
  ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output
} from '@angular/core';
import { FormControl } from '@angular/forms';
import icArrowDropDown from '@iconify/icons-ic/twotone-arrow-drop-down';
import icClose from '@iconify/icons-ic/twotone-close';
import { DropdownModel } from '@shared/models';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutocompleteComponent implements OnInit {
  @Output() selectedItemChange = new EventEmitter<DropdownModel>();
  @Output() filterTextChange = new EventEmitter<string>();

  @Input() label: string;
  @Input() set items(items: Array<DropdownModel>) {
    this._items = items;
    if (!items) return;
    this.filteredItems$ = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map((item) => item ? this.filterItems(item) : items.slice())
    );
  }
  get items(): Array<DropdownModel> {
    return this._items;
  }
  @Input() selectedItem: DropdownModel;
  @Input() filterText: string;

  stateCtrl: FormControl;
  filteredItems$: Observable<DropdownModel[]>;

  icClose = icClose;
  icArrowDropDown = icArrowDropDown;

  private _items: Array<DropdownModel>;

  constructor() { }

  ngOnInit() {
    this.stateCtrl = new FormControl();
    this.stateCtrl.valueChanges.subscribe(value => this.selectedItemChanged(value));
  }

  filterItems(name: string) {
    return this.items.filter(item =>
      item.renderText.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  selectedItemChanged(itemName: string) {
    this.selectedItem = this.items.find(item => item.renderText === itemName);
    this.selectedItemChange.emit(this.selectedItem);
  }
}
