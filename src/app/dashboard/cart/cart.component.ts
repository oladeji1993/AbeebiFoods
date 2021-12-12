import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/Services/alert/alert.service';
import { OrderService } from 'src/app/Services/order/order.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  availableCartItems: any = [];
  retrivedCartItems: any = [];


  constructor(
    private router: Router,
    private orderService: OrderService,
    private alert: AlertService,


  ) { }

  ngOnInit(): void {
    this.getCartItems()
  }


  getCartItems(){
    this.retrivedCartItems = localStorage.getItem("cartItems");
    this.availableCartItems = JSON.parse(this.retrivedCartItems)
  }

  back(){
    this.router.navigate(['/Dashboard/order'])
  }
  
  increaseQty(cart:any){
    let index = this.availableCartItems.indexOf(cart);
    for(let i=0; i<this.availableCartItems.length; i++){
      if(index === i){
        this.availableCartItems[i].quantity++
      }
    }
  }

  decreaseQty(cart:any){
    console.log(cart)
    let index = this.availableCartItems.indexOf(cart);
    for(let i=0; i<this.availableCartItems.length; i++){
      if(index === i){
        this.availableCartItems[i].quantity--
      }
    }
  }


  removeItem(cart:any){
    let index = this.availableCartItems.indexOf(cart);
    for(let i=0; i<this.availableCartItems.length; i++){
      if(index === i){
        this.availableCartItems.splice(i,1)
      }
    }
  }


  addOrder(){
    this.orderService.addOrder(this.availableCartItems).subscribe((result:any)=>{
      if(result.status === 200){
        this.alert.showSuccess(result.message, "success")
        localStorage.removeItem('cartItems')
        this.getCartItems()
        return
      }else{
        this.alert.showError(result.message, "Error")
      }
    }, err =>{
      this.alert.showError(err, "Error")
    })
  }

}
