import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/Services/alert/alert.service';
import { CustomerService } from 'src/app/Services/customer/customer.service';
import { PaymentService } from 'src/app/Services/payment/payment.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  allCustomers!: any;
  paymentForm!: FormGroup;


  constructor(
    private customer: CustomerService, 
    public fb: FormBuilder,
    private payment: PaymentService,
    private alert: AlertService

  ) { }

  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      customername: ['', Validators.compose([Validators.required])],
      paymenttype:[''],
      amount:['']
    })
    this.getCustomers()
  }


  getCustomers(){
    this.customer.getCustomers().subscribe((data:any)=>{
      this.allCustomers = data.data
    })
  }

  savePayment(){
    this.payment.addPayment(this.paymentForm.value)
    .subscribe((data:any)=>{
      if(data.status === 200){
        this.alert.showSuccess(data.message, "success")
        this.paymentForm.reset()
      }else{
        this.alert.showError(data.message, "error")
      }
    }, err =>{
      this.alert.showError(err, "Error")
    })
  }

}
