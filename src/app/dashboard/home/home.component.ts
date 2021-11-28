import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/Services/customer/customer.service';
import { ProductService } from 'src/app/Services/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  p: number = 1;
  customers!: number;
  allStock: any
  constructor(
    private customer: CustomerService,
    private product: ProductService
  ) { }

  ngOnInit(): void {
    this.getAllCustomers()
    this.totalStock()
  }

  getAllCustomers(){
    this.customer.getCustomers().subscribe((resp:any)=>{
      this.customers = resp.data.length
    })
  }

  totalStock(){
    this.product.getPackSize().subscribe((resp:any) =>{
      this.allStock = resp.data.totalQty
    })
  }

}
