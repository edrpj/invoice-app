import { Component, Input } from '@angular/core';
import { Invoice } from '../../interfaces';

@Component({
  selector: 'invoices-list',
  templateUrl: './invoices-list.component.html',
})
export class InvoicesListComponent {
  @Input()
  public invoices: Invoice[] = [];
}
