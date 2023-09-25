import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TypographyComponent } from './components/typography/typography.component';
import { ButtonComponent } from './components/button/button.component';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';

@NgModule({
  declarations: [
    TypographyComponent,
    ButtonComponent,
    TextFieldComponent,
    DropdownComponent,
  ],
  imports: [CommonModule],
  exports: [
    TypographyComponent,
    ButtonComponent,
    TextFieldComponent,
    DropdownComponent,
  ],
})
export class SharedModule {}
