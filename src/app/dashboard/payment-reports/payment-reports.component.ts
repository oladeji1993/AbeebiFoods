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

  getPayments(){
    this.payment.getPayments().subscribe((data:any)=>{
      console.log(data)
      this.allPayment = data.data
    })
  }

}
