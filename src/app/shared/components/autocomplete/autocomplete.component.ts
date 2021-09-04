import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { startWith } from 'rxjs/internal/operators/startWith';

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import icArrowDropDown from '@iconify/icons-ic/twotone-arrow-drop-down';
import icClose from '@iconify/icons-ic/twotone-close';
import { DropdownModel } from '@shared/models';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {
  @Output('selectedItemChange') selectedItemChange = new EventEmitter<DropdownModel>();
  @Output('filterTextChange') filterTextChange = new EventEmitter<string>();

  @Input('label') label: string;
  @Input('items') set items(items: Array<DropdownModel>) {
    this._items = items;
    if (!items) return;
    this.filteredItems$ = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(item => item ? this.filterItems(item) : items.slice())
    );
  }
  get items(): Array<DropdownModel> {
    return this._items;
  }
  @Input('selectedItem') selectedItem: DropdownModel;
  @Input('filterText') filterText: string;
  @Input('disabled') disabled: boolean = false;

  stateCtrl: FormControl;
  filteredItems$: Observable<DropdownModel[]>;
  icClose = icClose;
  icArrowDropDown = icArrowDropDown;

  private _items: Array<DropdownModel>;

  constructor() { }

  ngOnInit() {
    this.stateCtrl = new FormControl();
  }

  filterItems(name: string) {
    return this.items.filter(item =>
      item.renderText.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  selectedItemChanged(item: DropdownModel) {
    this.selectedItemChange.emit(item);
  }
}