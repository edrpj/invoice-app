import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TypographyComponent } from './components/typography/typography.component';
import { ButtonComponent } from './components/button/button.component';
import { TextFieldComponent } from './components/text-field/text-field.component';

@NgModule({
  declarations: [TypographyComponent, ButtonComponent, TextFieldComponent],
  imports: [CommonModule],
  exports: [TypographyComponent, ButtonComponent, TextFieldComponent],
})
export class SharedModule {}
