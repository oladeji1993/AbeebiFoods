import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AlertService } from 'src/app/Services/alert/alert.service';
import { ProductService } from 'src/app/Services/product/product.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  data: any;
  title!: string;
  customerForm!: FormGroup;
  public submitted = false;


  constructor(
    private product: ProductService,
    public fb: FormBuilder,
    private alert: AlertService,
    public dialogRef: MatDialogRef<CustomerComponent>,

  ) { }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      firstname: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      phone: ['', Validators.compose([Validators.required])],
      state: ['', Validators.compose([Validators.required])],
      lastname: ['', Validators.compose([Validators.required])],
      address: ['', Validators.compose([Validators.required])],
      customertype: ['', Validators.compose([Validators.required])],
      totalamount: ['', Validators.compose([Validators.required])],
      totalpaid: ['', Validators.compose([Validators.required])],


    })
  }

  addCustomer(){
    this.submitted = true;
    if(this.customerForm.invalid){
      return;
    }else{
      console.log(this.customerForm.value)
    }
  }

  states = [
    {id:"1", name: "Osun", value: "os"},
    {id:"2", name: "Ogun", value: "og"},
    {id:"3", name: "Lagos", value: "lasgidi"},
  ]

  customerType = [
    {id:"1", name: "Supermart", value: "sp"},
    {id:"2", name: "Store", value: "store"},
    {id:"3", name: "Distributors", value: "distributors"}
  ]

  closeModal() {
    this.dialogRef.close();
  }

}
