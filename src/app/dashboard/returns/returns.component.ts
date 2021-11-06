import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-returns',
  templateUrl: './returns.component.html',
  styleUrls: ['./returns.component.scss']
})
export class ReturnsComponent implements OnInit {

  p: number = 1;


  constructor() { }

  ngOnInit(): void {
  }

  Transactions = [
    {name: "ola", phone: "08165552545", date: "20/10/2021", product_name:"Abebi Poundo yam 0.9kg", amount: "300,000", qty:"2"},
    {name: "Dayo", phone: "08165552545", date: "20/10/2021", product_name:"Abebi Poundo yam 0.9kg", amount: "300,000", qty:"4"},
    {name: "Seun", phone: "08165552545", date: "20/10/2021", product_name:"Abebi Poundo yam 0.9kg", amount: "300,000", qty:"1"},
  ]

}
