import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/Services/modalServices/modal.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

 
  p: number = 1;


  constructor(
    private modalService: ModalService,

  ) { }

  ngOnInit(): void {
  }


  placeOrder(){
    const title = "Order"
    this.modalService.order(title).subscribe((resp:any)=>{
      if(resp && resp.data) {
        // this.getAllCustomers()
      }
    })
  }

  Transactions = [
    {name: "ola", phone: "08165552545", date: "20/10/2021", product_name:"Abebi Poundo yam 0.9kg", amount: "300,000", qty:"2"},
    {name: "Dayo", phone: "08165552545", date: "20/10/2021", product_name:"Abebi Poundo yam 0.9kg", amount: "300,000", qty:"4"},
    {name: "Seun", phone: "08165552545", date: "20/10/2021", product_name:"Abebi Poundo yam 0.9kg", amount: "300,000", qty:"1"},
  ]

}
