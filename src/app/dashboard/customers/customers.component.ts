import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/Services/modalServices/modal.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  p: number = 1;
  data: any

  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
  }

  Transactions = [
    {name: "ola", phone: "08165552545", address: "Shomolu", date: "20/10/2021", amount: "300,000", payment:"pos"},
    {name: "seun", phone: "08165552545", Adress: "Yaba", date: "10/5/2021", amount: "500,000", payment:"cash"},
    {name: "Dayo", phone: "081545151545", Adress: "Ikeja", date: "5/5/2021", amount: "150,000", payment:"transfer"}
  ]

  addCustomers(){
    const title = "Add Customer"
    this.modalService.customer(title).subscribe((resp:any)=>{
      console.log(resp)
    })
  }
}
