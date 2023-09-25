import { Component, Input } from "@angular/core";
import { ButtonVariant } from "../../interfaces";

@Component({
  selector: 'shared-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  @Input()
  public label?: string;

  @Input()
  public variant: ButtonVariant = 'primary';
}
