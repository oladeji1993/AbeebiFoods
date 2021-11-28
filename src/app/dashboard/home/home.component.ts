import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/Services/customer/customer.service';
import { OrderService } from 'src/app/Services/order/order.service';
import { ProductService } from 'src/app/Services/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  p: number = 1;
  customers!: number;
  allSales: any
  allStock: any
  constructor(
    private customer: CustomerService,
    private product: ProductService,
    private order: OrderService
  ) { }

  ngOnInit(): void {
    this.getAllCustomers()
    this.totalStock()
    this.getOrders()
  }

  getAllCustomers(){
    this.customer.getCustomers().subscribe((resp:any)=>{
      this.customers = resp.data.length
    })
  }
  getOrders(){
      this.order.getOrders().subscribe((resp:any)=>{
      this.allSales = resp.data.totalQty
    })
  }

  totalStock(){
    this.product.getPackSize().subscribe((resp:any) =>{
      this.allStock = resp.data.totalQty
    })
  }

}
