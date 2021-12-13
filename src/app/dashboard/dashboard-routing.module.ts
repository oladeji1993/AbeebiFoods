import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/dashboard/home/home.component';
import { DashboardComponent } from './dashboard.component';
import { PaymentReportsComponent } from './payment-reports/payment-reports.component';
import { RegisterComponent } from './../dashboard/register/register.component';
import { SalesReportComponent } from './sales-report/sales-report.component';
import { StocksComponent } from './stocks/stocks.component';
import { TransactionComponent } from './transaction/transaction.component';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { ProcurementsComponent } from './procurements/procurements.component';
import { LoginComponent } from '../components/login/login.component';
import { AuthGuard } from '../Services/auth.guard';
import { HasRoleGuardGuard } from '../Services/has-role-guard.guard';
import { CartComponent } from './cart/cart.component';
import { CustomerTransactionsComponent } from './customer-transactions/customer-transactions.component';

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
          component: HomeComponent,
          canActivate: [AuthGuard],
        },
      {
        path: 'transactions',
        component: TransactionComponent,
        canActivate: [AuthGuard, HasRoleGuardGuard],
        data: {
          role: ["1", "6"]
        }

      },
      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [AuthGuard, HasRoleGuardGuard],
        data: {
          role: ["1"]
        }
      },
      {
        path: 'sales-report',
        component: SalesReportComponent,
        canActivate: [AuthGuard, HasRoleGuardGuard],
        data: {
          role: ["1", "5"]
        }
      },
      {
        path: 'payment-report',
        component: PaymentReportsComponent,
        canActivate: [AuthGuard, HasRoleGuardGuard],
        data: {
          role: ["1", "6"]
        },
      },
      {
        path: 'stocks',
        component: StocksComponent,
        canActivate: [AuthGuard, HasRoleGuardGuard],
        data: {
          role: ["1", "3", "4"]
        }
      },
      {
        path: 'cart',
        component: CartComponent,
        canActivate: [AuthGuard, HasRoleGuardGuard],
        data: {
          role: ["1", "5"]
        }
      },
      {
        path: 'customer-transactions',
        component: CustomerTransactionsComponent,
        canActivate: [AuthGuard],
        data: {
          role: ["1", "5"]
        }
      },
      {
        path: 'customers',
        component: CustomersComponent,
        canActivate: [AuthGuard, HasRoleGuardGuard],
        data: {
          role: ["1", "5"]
        }


      },
      {
        path: 'order',
        component: OrdersComponent,
        canActivate: [AuthGuard, HasRoleGuardGuard],
        data: {
          role: ["1", "5"]
        }
      },
      {
        path: 'procurements',
        component: ProcurementsComponent,
        canActivate: [AuthGuard, HasRoleGuardGuard],
        data: {
          role: ['1', '2', "3"]
        }
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: 'Dashboard/home'
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
