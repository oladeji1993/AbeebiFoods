import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-reports',
  templateUrl: './payment-reports.component.html',
  styleUrls: ['./payment-reports.component.scss']
})
export class PaymentReportsComponent implements OnInit {
  p: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  Transactions = [
    {name: "ola", phone: "08165552545", address: "Shomolu", date: "20/10/2021", amount: "300,000", payment:"pos"},
    {name: "seun", phone: "08165552545", Adress: "Yaba", date: "10/5/2021", amount: "500,000", payment:"cash"},
    {name: "Dayo", phone: "081545151545", Adress: "Ikeja", date: "5/5/2021", amount: "150,000", payment:"transfer"}
  ]

}
