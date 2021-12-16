import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/Services/modalServices/modal.service';
import { OrderService } from 'src/app/Services/order/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  allOrders:any
  p: number = 1;
  loader = true


  constructor(
    private modalService: ModalService,
    private orderService: OrderService

  ) { }

  ngOnInit(): void {
    this.getAllOrders()
  }

  addToCart(){
    const title = "Add Product to cart"
    this.modalService.cart(title).subscribe(data =>{
      if(data && data.data) {
        // this.getAllProcurements()
      }
    })
  }


  placeOrder(){
    const title = "Order"
    this.modalService.order(title).subscribe((resp:any)=>{
      if(resp && resp.data) {
        this.getAllOrders()
      }
    })
  }

  getAllOrders(){
    this.orderService.getOrders().subscribe((resp:any)=>{
      this.allOrders = resp.data.results;
      this.loader = false;
    })
  }

}
