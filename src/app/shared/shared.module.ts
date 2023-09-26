import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TypographyComponent } from './components/typography/typography.component';
import { ButtonComponent } from './components/button/button.component';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    ButtonComponent,
    ClickOutsideDirective,
    DropdownComponent,
    SidebarComponent,
    TextFieldComponent,
    TypographyComponent,
  ],
  imports: [CommonModule],
  exports: [
    ButtonComponent,
    ClickOutsideDirective,
    DropdownComponent,
    SidebarComponent,
    TextFieldComponent,
    TypographyComponent,
  ],
})
export class SharedModule {}
