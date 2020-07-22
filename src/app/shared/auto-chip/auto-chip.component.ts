
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, ViewChild, OnInit, Input} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
 

@Component({
  selector: 'auto-chip',
  templateUrl: './auto-chip.component.html',
  styleUrls: ['./auto-chip.component.scss']
})
export class AutoChipComponent implements OnInit {
 
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  itemCtrl = new FormControl();
  filteredItems: Observable<string[]>;
  items: string[] = [];
  @Input() allItems: string[] = ['getting data...'];
  // allItems: string[] = ['one', 'two', 'three'];
 
  @ViewChild('itemInput') itemInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
 

  constructor() {
    this.filteredItems = this.itemCtrl.valueChanges.pipe(
      startWith(null),
      map((item: string | null) => item ? this._filter(item) : this.allItems.slice()));
  }
 
  ngOnInit(): void {
  }
 
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
 
    // Add item
    if ((value || '').trim()) {
      this.items.push(value.trim());
    }
 
    // Reset the input value
    if (input) {
      input.value = '';
    }
 
    this.itemCtrl.setValue(null);
 
    console.log("Items: ", this.items);
  }
 
  remove(item: string): void {
    const index = this.items.indexOf(item);
 
    if (index >= 0) {
      this.items.splice(index, 1);
    }
  }
 
  selected(event: MatAutocompleteSelectedEvent) {
    this.items.push(event.option.viewValue);
    this.itemInput.nativeElement.value = '';
    this.itemCtrl.setValue(null);
    return true;
  }
 
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
 
    return this.allItems.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
  }
 
}
