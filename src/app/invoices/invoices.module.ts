import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InvoicesRoutingModule } from './invoices-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InvoicesListComponent } from './components/invoices-list/invoices-list.component';
import { StatusComponent } from './components/status/status.component';

@NgModule({
  declarations: [HomePageComponent, InvoicesListComponent, StatusComponent],
  imports: [CommonModule, InvoicesRoutingModule, SharedModule],
})
export class InvoicesModule {}
