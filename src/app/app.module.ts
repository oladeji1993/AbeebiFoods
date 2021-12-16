import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { InterceptorInterceptor } from './Services/auth/interceptor.interceptor';
import { AddProductComponent } from './shared/modal/add-product/add-product.component';
import { AddPackSizeComponent } from './shared/modal/add-pack-size/add-pack-size.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CustomerComponent } from './shared/modal/customer/customer.component';
import { OrderComponent } from './shared/modal/order/order.component';
import { ProcurementComponent } from './shared/modal/procurement/procurement.component';
import { IsLoggedIn } from './shared/utilities/is-logged-in';
import { AuthGuard } from './Services/auth.guard';
import { CartComponent } from './shared/modal/cart/cart.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HashLocationStrategy, LocationStrategy  } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AddProductComponent,
    AddPackSizeComponent,
    CustomerComponent,
    OrderComponent,
    ProcurementComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    AppRoutingModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxSkeletonLoaderModule,
    ToastrModule.forRoot(), // ToastrModule added

  ],
  providers: [
    FormsModule,
    ReactiveFormsModule,
    IsLoggedIn,
    AuthGuard,
    {
      provide : LocationStrategy , 
      useClass: HashLocationStrategy
    },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: InterceptorInterceptor,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
