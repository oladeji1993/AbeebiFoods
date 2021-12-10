import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AlertService } from 'src/app/Services/alert/alert.service';
import { CustomerService } from 'src/app/Services/customer/customer.service';
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
  allCustomers: any


  constructor(
    private product: ProductService,
    public fb: FormBuilder,
    private alert: AlertService,
    private customerService: CustomerService,
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
      companyname: ['', Validators.compose([Validators.required])],
      regdate: [''],
    })

    if(this.data){
      this.customerForm.patchValue(this.data);
    }
  }

  addCustomer(){
    this.submitted = true;
    if(this.customerForm.invalid){
      return;
    }else{
      if(this.data){
        const { firstname, email, phone, state, lastname, address, customertype, totalamount, totalpaid, id} = this.customerForm.value
        const data = {
          firstname, 
          email, 
          phone, 
          state, 
          lastname, 
          address, 
          customertype, 
          totalamount,
          totalpaid, 
          id: this.data.id
        }
        console.log(data)
        this.customerService.updateCustomer(data)
        .subscribe((result:any)=>{
          if(result.status === 200){
            this.alert.showSuccess(result.message, "success")
            this.closeModal(true);
            return
          }else{
            this.alert.showError(result.message, "Error")
          }
        }, err =>{
          this.alert.showError(err, "Error")
        })
      }else{
        this.customerService.addCustomer(this.customerForm.value)
        .subscribe((response:any) =>{
          if(response.status === 200){
            this.alert.showSuccess(response.message, "success")
            this.closeModal(true);
            return
          }else{
            this.alert.showError(response.message, "Error")
          }
        }, err =>{
          this.alert.showError(err, "Error")
        })
      }
    }
  }

  get formControl() {
    return this.customerForm.controls;
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

  closeModal(val?:boolean) {
    this.dialogRef.close({ data: val });
  }

}
