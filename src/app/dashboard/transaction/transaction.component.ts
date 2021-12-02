import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/Services/alert/alert.service';
import { CustomerService } from 'src/app/Services/customer/customer.service';
import { OrderService } from 'src/app/Services/order/order.service';
import { PaymentService } from 'src/app/Services/payment/payment.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  allCustomers!: any;
  paymentForm!: FormGroup;
  orderDetailsForm! : FormGroup;
  allOrders!: any;
  customerName : any
  productprice: any;
  data: any;
  orderId: any;
  orderDetails: any
  balance: any
  paymentDetails = false


  constructor(
    private customer: CustomerService, 
    public fb: FormBuilder,
    private payment: PaymentService,
    private alert: AlertService,
    private order: OrderService

  ) { }

  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      customername: ['', Validators.compose([Validators.required])],
      paymenttype:[''],
      datereceived:[''],
      amount:['']
    })

    this.orderDetailsForm = this.fb.group({
      productname:[''],
      orderdate:[''],
      productprice:[''],
      amountpaid:[''],
      quantity:[''],
      customername: ['', Validators.compose([Validators.required])],
      packsize:[''],
      tobalance:['']
    })
    this.getCustomers();
    this.getAllOrders()
  }


  getCustomers(){
    this.customer.getCustomers().subscribe((data:any)=>{
      this.allCustomers = data.data
    })
  }

  getAllOrders(){
    this.order.getOrders().subscribe((resp:any)=>{
      this.allOrders = resp.data.results
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


  onOptionsSelected(id:string){
    this.orderId = id
    this.data = {
      id: id
    }
    this.order.showDetails(this.data).subscribe((resp:any)=>{
      this.orderDetailsForm.patchValue(resp.data[0])
      this.paymentDetails = true
    })
  }

  updatePaymentDetails(){
    const {
      productname, 
      orderdate, 
      productprice, 
      amountpaid,
      quantity,
      customername,
      packsize,
      tobalance,
      id,
    } = this.orderDetailsForm.value

    const value = {
      productname, 
      orderdate, 
      productprice, 
      amountpaid,
      quantity,
      customername,
      packsize,
      tobalance,
      id: this.orderId
    }
    this.order.updateOrder(value).subscribe((data:any) =>{
      if(data.status === 200){
        this.alert.showSuccess(data.message, "success")
        this.orderDetailsForm.reset()
      }else{
        this.alert.showError(data.message, "error")
      }
    }, err =>{
      this.alert.showError(err, "Error")
    })
  }

}
