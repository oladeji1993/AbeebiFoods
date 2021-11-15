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
import { ReturnsComponent } from './returns/returns.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
    ReturnsComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    MatSidenavModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    // Ng2OrderModule, 
    MatPaginatorModule,
    NgxPaginationModule
  ]
})
export class DashboardModule { }
