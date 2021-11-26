import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AlertService } from 'src/app/Services/alert/alert.service';
import { CustomerService } from 'src/app/Services/customer/customer.service';
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
  orderParams: any


  constructor(
    public dialogRef: MatDialogRef<AddPackSizeComponent>,
    private product: ProductService,
    public fb: FormBuilder,
    private customer: CustomerService,
    private alert: AlertService


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
      console.log(this.productForm)
    }
  }

  closeModal(val?:boolean) {
    this.dialogRef.close({ data: val });
  }



}
