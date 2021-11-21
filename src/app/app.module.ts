import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptorProvider } from './Services/auth/interceptor.interceptor';
import { AddProductComponent } from './shared/modal/add-product/add-product.component';
import { AddPackSizeComponent } from './shared/modal/add-pack-size/add-pack-size.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CustomerComponent } from './shared/modal/customer/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AddProductComponent,
    AddPackSizeComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added

  ],
  providers: [
    FormsModule,
    ReactiveFormsModule,
    AuthInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
