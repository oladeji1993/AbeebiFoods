import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/Services/alert/alert.service';
import { CustomerService } from 'src/app/Services/customer/customer.service';
import { OrderService } from 'src/app/Services/order/order.service';
import { ProductService } from 'src/app/Services/product/product.service';
import { AddPackSizeComponent } from '../add-pack-size/add-pack-size.component';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  allProducts!: any[];
  allCustomers!: any[];
  public submitted = false;
  productForm!: FormGroup;
  info: any;
  title!: string;
  orderParams: any;
  cartItems: any = [];
  singleOrder: any = []


  constructor(
    public dialogRef: MatDialogRef<AddPackSizeComponent>,
    private product: ProductService,
    public fb: FormBuilder,
    private customer: CustomerService,
    private router: Router,
    private alert: AlertService,
    private orderService: OrderService


  ) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      productname: ['', Validators.compose([Validators.required])],
      orderdate: ['', Validators.compose([Validators.required])],
      productprice: ['', Validators.compose([Validators.required])],
      amountpaid: ['', Validators.compose([Validators.required])],
      quantity: ['', Validators.compose([Validators.required])],
      customername: ['', Validators.compose([Validators.required])],
      packsize: ['', Validators.compose([Validators.required])],
      tobalance: ['', Validators.compose([Validators.required])],
    })

    if(this.info) {
      this.productForm.patchValue(this.info);
    }
    this.getAllProduct();
    this. getAllCustomers()
  }


  get formControl() {
    return this.productForm.controls;
  }

  getAllProduct(){
    this.product.getProducts().subscribe((response:any) => {
      this.allProducts = response.data
    })
  }

  getAllCustomers(){
    this.customer.getCustomers().subscribe((data:any)=>{
      this.allCustomers = data.data
    })
  }

  addToCart(){
    this.submitted = true
    if(this.productForm.invalid){
      return
    }else{
      this.cartItems.push(this.productForm.value)
      this.productForm.reset()
      this.formReset(this.productForm)
    }
  }

  formReset(form:any) {
    form.reset();
    Object.keys(form.controls).forEach(key => {
      form.get(key).setErrors(null) ;
  });
}

  order(){
    this.submitted = true
    if(this.productForm.invalid){
      return
    }if(this.cartItems.length > 1){
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems))
      this.router.navigate(['/Dashboard/cart'])
      this.closeModal(true);
    }else{
      this.singleOrder.push(this.productForm.value)
      this.orderService.addOrder(this.singleOrder).subscribe((data:any)=>{
        if(data.status === 200){
          this.alert.showSuccess(data.message, "success")
          this.closeModal(true);
          return
        }else{
          this.alert.showError(data.message, "Error")
        }
      }, err =>{
        this.alert.showError(err, "Error")
      })
    }
  }

  closeModal(val?:boolean) {
    this.dialogRef.close({ data: val });
  }

}
