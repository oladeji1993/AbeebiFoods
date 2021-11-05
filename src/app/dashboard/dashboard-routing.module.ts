import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/dashboard/home/home.component';
import { DashboardComponent } from './dashboard.component';
import { PaymentReportsComponent } from './payment-reports/payment-reports.component';
import { ReturnsComponent } from './returns/returns.component';
import { SalesReportComponent } from './sales-report/sales-report.component';
import { StocksComponent } from './stocks/stocks.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  { 
    path: '', 
    component: DashboardComponent,
    children: [
      {
          path: '',
          redirectTo: 'home',
          pathMatch: 'full'
      },
      {
          path: 'home',
          component: HomeComponent
      },
      {
        path: 'transactions',
        component: TransactionComponent
      },
      {
        path: 'sales-report',
        component: SalesReportComponent
      },
      {
        path: 'payment-report',
        component: PaymentReportsComponent
      },
      {
        path: 'stocks',
        component: StocksComponent
      },
      {
        path: 'return',
        component: ReturnsComponent
      },
    ]
  }]
  ;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
