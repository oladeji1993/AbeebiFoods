import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/Services/customer/customer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  p: number = 1;
  customers!: number 
  constructor(
    private customer: CustomerService
  ) { }

  ngOnInit(): void {
    this.getAllCustomers()
  }

  getAllCustomers(){
    this.customer.getCustomers().subscribe((resp:any)=>{
      this.customers = resp.data.length
    })
  }

}
