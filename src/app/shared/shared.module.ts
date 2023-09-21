import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TypographyComponent } from "./components/typography/typography.component";

@NgModule({
  declarations: [TypographyComponent],
  imports: [CommonModule],
  exports: [TypographyComponent]
})
export class SharedModule {}
