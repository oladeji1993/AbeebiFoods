import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/Services/customer/customer.service';

@Component({
  selector: 'app-customer-transactions',
  templateUrl: './customer-transactions.component.html',
  styleUrls: ['./customer-transactions.component.scss']
})
export class CustomerTransactionsComponent implements OnInit {

  customerDetails : any = []
  totalPayment:any;
  customername: any

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.customerTranctions()
  }


  customerTranctions(){
    const name = localStorage.getItem('name')
    this.customername = name
    const data = {
      customername: name,
    }
    this.customerService.fetchCustomerTransations(data).subscribe((response:any) => {
      this.totalPayment = response.data['totalpayment']
      this.customerDetails = response.data['results']
      
    })
  }

  back(){
    this.router.navigate(['/Dashboard/customers'])
  }

}
