import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TypographyComponent } from './components/typography/typography.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [TypographyComponent, ButtonComponent],
  imports: [CommonModule],
  exports: [TypographyComponent, ButtonComponent],
})
export class SharedModule {}
