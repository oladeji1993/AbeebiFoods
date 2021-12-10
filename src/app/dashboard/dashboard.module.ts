import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import {NgxPaginationModule} from 'ngx-pagination';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { TransactionComponent } from './transaction/transaction.component';
import { SalesReportComponent } from './sales-report/sales-report.component';
import { PaymentReportsComponent } from './payment-reports/payment-reports.component';
import { StocksComponent } from './stocks/stocks.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { ProcurementsComponent } from './procurements/procurements.component';
import { IsLoggedIn } from '../shared/utilities/is-logged-in';
import { AuthGuard } from '../Services/auth.guard';
import { CartComponent } from './cart/cart.component';
import { CustomerTransactionsComponent } from './customer-transactions/customer-transactions.component';



@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    NavComponent,
    HeaderComponent,
    TransactionComponent,
    SalesReportComponent,
    PaymentReportsComponent,
    StocksComponent,
    RegisterComponent,
    CustomersComponent,
    OrdersComponent,
    ProcurementsComponent,
    CartComponent,
    CustomerTransactionsComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    MatSidenavModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    IsLoggedIn,
    AuthGuard
  ],
})
export class DashboardModule { }
