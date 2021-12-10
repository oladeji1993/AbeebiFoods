import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AlertService } from 'src/app/Services/alert/alert.service';
import { CustomerService } from 'src/app/Services/customer/customer.service';
import { OrderService } from 'src/app/Services/order/order.service';
import { ProductService } from 'src/app/Services/product/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartParams:any
  title:any;
  allProducts!: any[];
  selected: any = [];
  allCustomers!: any[];
  public submitted = false;
  productForm!: FormGroup;
  info: any;
  orderParams: any

  constructor(
    public dialogRef: MatDialogRef<CartComponent>,
    private product: ProductService,
    public fb: FormBuilder,
    private customer: CustomerService,
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

  order(){
    this.submitted = true
    if(this.productForm.invalid){
      return
    }else{
      this.orderService.addOrder(this.productForm.value).subscribe((data:any)=>{
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

  checkValue(event:any, product:any) {
    console.log(event.target.checked)
    if (event.target.checked == true) {
      this.selected.push(product);
      console.log(this.selected)
    } else {
      this.selected.map((i:any) => {
        if (i == product) {
          this.selected.splice(this.selected.indexOf(i), 1);
        }
      });
    }
  }

  closeModal(val?:boolean) {
    this.dialogRef.close({ data: val });
  }

}
