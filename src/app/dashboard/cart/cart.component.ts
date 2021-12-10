import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/Services/order/order.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  availableCartItems: any = [];

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.getCartItems()
  }


  getCartItems(){
    this.orderService.cartItems.subscribe((data:any)=>{
      this.availableCartItems = data;
      console.log(this.availableCartItems)
    })
  }


  
  increaseQty(){
    // for(let i=0; i<this.getCartDetails.length; i++){
    //   if(this.getCartDetails[i].id === id){
    //     this.getCartDetails[i].qty =  parseInt(qty) + 1
    //   }
    // }
    // localStorage.setItem('cart', JSON.stringify(this.getCartDetails))
    // this.loadTotal();
  }

  decreaseQty(){
    // for(let i=0; i<this.getCartDetails.length; i++){
    //   if(this.getCartDetails[i].id === id){
    //     if(qty != 1){
    //       this.getCartDetails[i].qty =  parseInt(qty) - 1
    //     }
    //   }
    // }
    // localStorage.setItem('cart', JSON.stringify(this.getCartDetails))
    // this.loadTotal();
  }


  total: number = 0;
  loadTotal(){
    // if(localStorage.getItem('cart')){
    //   this.getCartDetails = JSON.parse(localStorage.getItem('cart'));
    //   this.total = this.getCartDetails.reduce(function(acc, val){
    //     return acc + (val.price * val.qty);
    //   }, 0)
    // }
  }


  removeAll(){
    // localStorage.removeItem('cart');
    // this.getCartDetails = [];
    // this.total = 0;
    // this.cartNumber = 0;
    // this.addToCartService.cartSubject.next(this.cartNumber)
  }


  removeItem(){
    // if(localStorage.getItem('cart')){
    //   this.getCartDetails = JSON.parse(localStorage.getItem('cart'))
  
    //   for(let i=0; i < this.getCartDetails.length; i++){
    //     if(getCartDetail === this.getCartDetails[i].id){
    //       this.getCartDetails.splice(i, 1);
    //       localStorage.setItem('cart', JSON.stringify(this.getCartDetails))
    //       this.loadTotal();
    //       this.cartNumberFunc();
    //   }
    // }
    // }
  }

}
