import { Component, Input } from '@angular/core';
import { InputType } from '../../interfaces';

@Component({
  selector: 'shared-text-field',
  templateUrl: './text-field.component.html',
})
export class TextFieldComponent {
  @Input()
  public label: string = '';

  @Input()
  public inputType: InputType = 'text';
}
