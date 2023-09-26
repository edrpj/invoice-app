import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TypographyComponent } from './components/typography/typography.component';
import { ButtonComponent } from './components/button/button.component';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';

@NgModule({
  declarations: [
    TypographyComponent,
    ButtonComponent,
    TextFieldComponent,
    DropdownComponent,
    ClickOutsideDirective
  ],
  imports: [CommonModule],
  exports: [
    TypographyComponent,
    ButtonComponent,
    TextFieldComponent,
    DropdownComponent,
    ClickOutsideDirective
  ],
})
export class SharedModule {}
