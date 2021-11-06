import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {
  p: number = 1;
  // Transactions!: []
  constructor() { }

  ngOnInit(): void {
  }

  // Transactions = [
  //   {product: "BEANS FLOUR", pack_size: "Abebi Beans Flour 50kg", cost_of_production: "610", selling_price: "700", total_qty: "10512", Qty_out:"10077",Qty_left:"50", new_qty:"10"},
  //   {product: "GARRI", pack_size: "Gari Flour 50kg", cost_of_production: "2210", selling_price: "3400", total_qty: "10512", Qty_out:"10077",Qty_left:"50", new_qty:"10"},
  //   {product: "PLANTAIN FLOUR", pack_size: "Abebi Plantain flour 50kg", cost_of_production: "2210", selling_price: "3400", total_qty: "10512", Qty_out:"10077",Qty_left:"50", new_qty:"10"},
  // ]
  Transactions = [
    {product: "BEANS FLOUR", pack_size: "Abebi Beans Flour 50kg", cost_of_production: "610", selling_price: "700", total_qty: "10512", Qty_out:"10077",Qty_left:"50", new_qty:"10"},
    {product: "GARRI", pack_size: "Gari Flour 50kg", cost_of_production: "2210", selling_price: "3400", total_qty: "10512", Qty_out:"10077",Qty_left:"50", new_qty:"10"},
    {product: "PLANTAIN FLOUR", pack_size: "Abebi Plantain flour 50kg", cost_of_production: "2210", selling_price: "3400", total_qty: "10512", Qty_out:"10077",Qty_left:"50", new_qty:"10"},
  ]

}
