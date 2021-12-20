import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'; 
import { Router } from '@angular/router';
import { AlertService } from 'src/app/Services/alert/alert.service';
import { OrderService } from 'src/app/Services/order/order.service';
import { jsPDF } from 'jspdf' 


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @ViewChild('content', {static: false}) el!: ElementRef;

  availableCartItems: any = [];
  retrivedCartItems: any = [];
  totalBill: any
  name:any


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
    this.name = this.availableCartItems[0]?.customername
    this.totalBill = 0;

    for(let i = 0; i < this.availableCartItems.length; i++){
      this.totalBill += parseInt(this.availableCartItems[i].productprice);
    }
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


  download(){
    let pdf = new jsPDF('p','pt','a4');
    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save("invoice.pdf");
      }
    })
  }

  parse(value: string) {
    return parseInt(value);
  }

}
