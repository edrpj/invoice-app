import { Component, Input } from '@angular/core';
import { TypographyVariant } from '../../interfaces';

@Component({
  selector: 'shared-typography',
  templateUrl: './typography.component.html',
})
export class TypographyComponent {
  @Input()
  public variant: TypographyVariant = 'h1';
  @Input()
  public text?: string;
}
