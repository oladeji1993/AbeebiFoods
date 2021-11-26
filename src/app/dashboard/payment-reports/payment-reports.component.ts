import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/Services/payment/payment.service';

@Component({
  selector: 'app-payment-reports',
  templateUrl: './payment-reports.component.html',
  styleUrls: ['./payment-reports.component.scss']
})
export class PaymentReportsComponent implements OnInit {
  p: number = 1;
  allPayment! : any

  constructor(
    private payment: PaymentService,

  ) { }

  ngOnInit(): void {
    this.getPayments()
  }

  Transactions = [
    {name: "ola", phone: "08165552545", address: "Shomolu", date: "20/10/2021", amount: "300,000", payment:"pos"},
    {name: "seun", phone: "08165552545", Adress: "Yaba", date: "10/5/2021", amount: "500,000", payment:"cash"},
    {name: "Dayo", phone: "081545151545", Adress: "Ikeja", date: "5/5/2021", amount: "150,000", payment:"transfer"}
  ]

  getPayments(){
    this.payment.getPayments().subscribe((data:any)=>{
      console.log(data)
      this.allPayment = data.data
      // console.log(this.allPayment)
    })
  }

}
