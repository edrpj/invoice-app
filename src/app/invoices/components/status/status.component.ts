import { Component, Input } from '@angular/core';
import { InvoiceStatus } from '../../interfaces';

@Component({
  selector: 'invoice-status',
  templateUrl: './status.component.html',
  styles: [],
})
export class StatusComponent {
  @Input()
  public status: InvoiceStatus = 'draft';
}
