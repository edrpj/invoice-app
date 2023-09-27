import { Component, OnInit } from '@angular/core';
import { InvoicesService } from '../../services/invoices.service';
import { Invoice } from '../../interfaces';

@Component({
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  public invoices: Invoice[] = [];

  constructor(private invoicesService: InvoicesService) {}

  ngOnInit(): void {
    this.invoicesService.getInvoices().subscribe(invoices => {
      this.invoices = invoices;
    });
  }
}
