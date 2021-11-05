import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  p: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  Members = [
    {transaction: "Airtime", amount: "3000", network: "MTN", date: "20/10/2021"},
    {transaction: "Data", amount: "500", network: "Glo", date: "2/10/2021"},
    {transaction: "Cable subscription", amount: "10000", network: "", date: "1/10/2021"}

  ]

}
