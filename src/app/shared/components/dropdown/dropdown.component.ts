import { Component, Input } from '@angular/core';
import { DropdownOption } from '../../interfaces';

@Component({
  selector: 'shared-dropdown',
  templateUrl: './dropdown.component.html',
})
export class DropdownComponent {
  @Input()
  public label?: string;

  @Input()
  public options: DropdownOption[] = [];

  public isDropdownOpen: boolean = false;
  public selectedOption: DropdownOption = {
    value: '',
    label: 'Select an option...',
  };

  changeSelectedOption(option: DropdownOption): void {
    this.selectedOption = { ...option };
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
